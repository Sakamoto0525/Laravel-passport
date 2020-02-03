# Laravel-passport

Laravel-passportの学習用リポジトリ

## 環境

### ミドルウェア

- php 7.3.3
- nginx 1.17.7
- mysql 8.0.18

### Docker

- app: バックエンドのAPI（php 7.3.3）
- web: Webサーバー（nginx 1.17.7）
- db: DB（MySQL 8.0.18）

## 起動

### 設定ファイルの作成

```bash
$ cp .env.default .env
$ cp src/.env.example src/.env
```

### 各コンテナのビルド（初めて起動する時）

```bash
$ docker-compose build
```

### 各コンテナの起動

```bash
$ docker-compose up
```

### composer install

```bash
$ docker-compose exec app composer install
```

### DBセットアップ

```bash
$ docker-compose exec app php artisan migrate
```

### ひとつのコンテナの再起動

```bash
$ docker-compose restart app
```

## テスト

### phpunit

```bash
$ docker-compose exec app vendor/bin/phpunit
```

### php_cs_fixer

```bash
$ docker-compose exec app composer fixer
# 自動整形
$ docker-compose exec app composer fixer-fix
```

### php_sniffer

```bash
$ docker-compose exec app composer sniffer
# 自動整形
$ docker-compose exec app composer sniffer-fix
```

### eslint

```bash
# frontendディレクトリ配下で実行
$ npm run lint
# 自動整形
$ npm run lint --fix
```

## MySQL 接続

```bash
$ docker-compose exec db bash -c 'mysql -u${MYSQL_USER} -p${MYSQL_PASSWORD} ${MYSQL_DATABASE}'
```
