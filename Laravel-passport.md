# Laravel-passportメモ

## Laravel

1. Passportインストール

```bash:
composer require laravel/passport
```

2. クライアントとアクセストークンを保存するために必要なテーブルを作成

```bash:
php artisan migrate
```

3. セキュアアクセストークンの生成に必要な暗号化キーを作成

さらに、このコマンドはアクセストークンの生成に使用される「パーソナルアクセス」および「パスワード付与」クライアントを作成

```bash:
php artisan passport:install
```

4. モデルに特性を追加

この特性は、認証されたユーザーのトークンとスコープを検査できるようにするいくつかのヘルパーメソッドをモデルに提供する

```php:App\User.php
<?php

namespace App;

use Laravel\Passport\HasApiTokens; // 追加
use Illuminate\Notifications\Notifiable; // 追加
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable; // HasApiTokens追加
}
```

5. ルートを登録

アクセストークンを発行し、アクセストークン、クライアント、および個人用アクセストークンを無効にするために必要なルートを登録する

```php:AuthServiceProvider
<?php

namespace App\Providers;

use Laravel\Passport\Passport;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Passport::routes();
    }
}
```

6. 認証ガードの設定変更

最後に、構成ファイルで、認証ガードのオプションをに設定する必要があります。これは、着信APIリクエストを認証するときにPassportを使用するようにアプリケーションに指示します

```php:config\auth.php
'guards' => [
    'web' => [
        'driver' => 'session',
        'provider' => 'users',
    ],

    'api' => [
        'driver' => 'passport',
        'provider' => 'users',
    ],
],
```