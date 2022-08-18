

REPO ?= openyurt
TAG ?= latest

IMG ?= ${REPO}/yurt-home:${TAG}


docker-build:
	docker build -f Dockerfile . -t ${IMG}

docker-push:
	docker push ${IMG}

local-start: docker-build
	docker run -p 3000:3000 -it ${IMG}
