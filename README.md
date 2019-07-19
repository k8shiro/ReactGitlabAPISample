- 初期構築時(このリポジトリをcloneしてきた場合は不要)

```
docker-compose run --rm node sh -c "create-react-app react-gitlab-api-sample"
```

- 開発サーバ立ち上げ

```
docker-compose run --service-ports node ash -c "cd react-gitlab-api-sample; yarn start"
```

- パッケージ追加

```
docker-compose run --service-ports node ash -c "cd react-gitlab-api-sample; yarn add react-chartjs-2 chart.js"
```

- githubpageで公開

```
docker-compose run --service-ports node ash -c "cd react-gitlab-api-sample; yarn run gh-pages --user 'ko-he- <koheiyatsushiro@yahoo.co.jp>' --repo https://github.com/ko-he-/react-gitlab-api-sample -d build"
```

