# OpenYurt Docs and Website

This repo contains the source code of [OpenYurt website](https://openyurt.io/) 。
This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.


## Contributing to OpenYurt Website

### Add or Update Docs

- Attention to Version: 
  
    From OpenYurt v0.5.0, each version corresponds to a version of the docs. So you need to pay attention to the version 
when adding or updating the doc.
  
- Attention to EN/ZH:

  Since the website supports both Chinese and English, the both languages need to be considered.

- Attention to Format:

  Please refer to the existing format for the doc format.

#### For Historic Version (example: v0.5.0)

Take the docs of v0.5.0 version as an example, the following explains how to add or update the doc.

1) Add or Update English doc

   The doc needs to be placed in `versioned_docs/version-v0.5.0/`.
   Images are placed in the directory `static/img/docs/`.
   
2) Add or Update Chinese doc

   The doc needs to be placed in `i18n/zh/docusaurus-plugin-content-docs/version-v0.5.0/`.
   Images are placed in the directory `static/img/docs/`.
   
3) Modify the directory structure

   If you add a doc or modify the doc directory structure, please modify the file `versioned_sidebars/version-v0.5.0-sidebars.json`
   to add document path or adjust directory structure.
   
   Then for file `i18n/zh/docusaurus-plugin-content-docs/version-v0.5.0.json`, please check whether categories in
   `versioned_sidebars/version-v0.5.0-sidebars.json` has corresponding translation. 
   
#### For Next Version

Next Version is unreleased docs for OpenYurt Next Version. 

The following explains how to add or update the doc.

1) Add or Update English doc

   The doc needs to be placed in `docs/`.
   Images are placed in the directory `static/img/docs/`.
   
2) Add or Update Chinese doc

   The doc needs to be placed in `i18n/zh/docusaurus-plugin-content-docs/current/`.
   Images are placed in the directory `static/img/docs/`.
   
3) Modify the directory structure

   If you add a doc or modify the doc directory structure, please modify the file `sidebars.js`
   to add document path or adjust directory structure.

   Then for file `i18n/zh/docusaurus-plugin-content-docs/current.json`, please check whether categories in
   `vsidebars.js` has corresponding translation.

   
### Add or Update Blogs

The following explains how to add or update the blog.

1) Add or Update English blog

   The doc needs to be placed in `blog/`.
   Images are placed in the directory `static/img/blog/`.

2) Add or Update Chinese blog

   The doc needs to be placed in `i18n/zh/docusaurus-plugin-content-blog/`.
   Images are placed in the directory `static/img/blog/`.

3) Add or Update author info

    Please add author github information in `blog/authors.yml`.

Note: Please refer to the existing format for the blog format.


### Local Build

Before submitting the pr, please build it locally to check whether the website work.

The following process can help you build locally.


#### step1: installation
```
$ yarn install
```

#### step2: build
```
$ yarn build
$ npm run serve
```
After building, you can visit **http://localhost:3000/** to check.