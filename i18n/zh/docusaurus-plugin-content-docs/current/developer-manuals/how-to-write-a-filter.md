---
title: 如何在YurtHub中新增一个过滤器
---

如果需要新增一个过滤器，您需要理解 OpenYurt 的代码库，并可能需要向其贡献代码。以下是您通常需要遵循的步骤：

## 1. 设置 OpenYurt 开发环境

首先，设置您的开发环境以便在 OpenYurt 上工作：

- 在 GitHub 上 Fork [OpenYurt 仓库](https://github.com/openyurtio/openyurt)。
- 克隆您的 Fork 到本地环境。
- 安装 Go（由 OpenYurt 指定的版本）并设置您的 GOPATH。

## 2. 理解过滤器的ObjectFilter接口

在编写您的过滤器之前，您应该了解现有的ObjectFilter接口。这些接口位于 https://github.com/openyurtio/openyurt/blob/master/pkg/yurthub/filter/interfaces.go#L53 具体如下：

```
type ObjectFilter interface {
	Name() string
	// SupportedResourceAndVerbs is used to specify which resource and request verb is supported by the filter.
	// Because each filter can make sure what requests with resource and verb can be handled.
	SupportedResourceAndVerbs() map[string]sets.String
	// Filter is used for filtering runtime object
	// all filter logic should be located in it.
	Filter(obj runtime.Object, stopCh <-chan struct{}) runtime.Object
}
```

您的新过滤器将需要实现上述接口的三个方法，其中:
- Name: 返回过滤器的名称
- SupportedResourceAndVerbs: 用于指定请求的关联的资源和请求方法。
- Filter: 包含所有关于的资源修改的逻辑处理

## 3. 编写您的过滤器

在 OpenYurt 仓库中导航到 `pkg/yurthub/filter` 目录。您可以参考现有的过滤器。

通过为您的过滤器创建一个新目录并实现所需的接口。例如实现一个名为 `myfilter`的用于处理 list/watch service请求的响应数据的过滤器：

```
package myfilter

import (
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/util/sets"
	"k8s.io/client-go/kubernetes"

	"github.com/openyurtio/openyurt/pkg/yurthub/filter"
	"github.com/openyurtio/openyurt/pkg/yurthub/filter/base"
)

const (
	FilterName = "myfilter"
)

// Register registers a filter
func Register(filters *base.Filters) {
	filters.Register(FilterName, func() (filter.ObjectFilter, error) {
		return NewMyFilter()
	})
}

type myFilter struct {
	client kubernetes.Interface
}

func NewMyFilter() (filter.ObjectFilter, error) {
	return &myFilter{}, nil
}

func (mf *myFilter) Name() string {
	return FilterName
}

func (mf *myFilter) SupportedResourceAndVerbs() map[string]sets.String {
	return map[string]sets.String{
		"services": sets.NewString("list", "watch"),
	}
}

func (mf *myFilter) Filter(obj runtime.Object, stopCh <-chan struct{}) runtime.Object {
	// Your logic here
	return obj
}
```

同时您可以通过实现 `pkg/yurthub/filter/initializer` 中的方法，来完成需要的变量注入。如下所示：

```
func (mf *myFilter) SetKubeClient(client kubernetes.Interface) error {
    mf.client = client
    return nil
}
```

## 4. 配置您的过滤器

您需要注册您的过滤器，以便它可以在YurtHub运行时被启动。从仓库导航到 `cmd/yurthub/app/options/filter.go` 文件，完成如下配置：

- 您的过滤器是否需要运行在云端节点上的YurtHub中运行，如果不需要的话，可以Append在变量 DisabledInCloudMode 后面。

- 您的过滤器默认需要处理哪个组件发起请求(list/watch service请求)的返回数据，请在变量 SupportedComponentsForFilter 中指定。

- 在方法 RegisterAllFilters 中注册您的过滤器

## 5. 构建和测试您的更改

确保您能够使用您的更改构建整个 YurtHub 可执行文件：

```
make build WHAT=cmd/yurthub
```

同时运行单元测试和集成测试以确保您的更改没有破坏现有功能。

## 6. 在正在运行的节点中启用您的过滤器

现在，YurtHub中注册的过滤器默认都是启动的。您可以使用YurtHub的启动参数 `--disabled-resource-filters` 来关闭您不需要的过滤器。

## 7. 贡献到 OpenYurt（可选）

如果您认为您的过滤器对更广泛的社区有益，请考虑将其贡献回官方 OpenYurt 项目。为此，您需要：

- 向 OpenYurt 主仓库打开一个 Pull Request (PR)。
- 遵循 OpenYurt 贡献指南和 PR 流程。
- 与维护者和社区互动，以便您的 PR 被审查并最终
