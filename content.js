// ローカル管理画面から書き出したポートフォリオデータ
window.portfolioContent = {
  "about": {
    "description": "Web制作・データ分析・業務自動化の制作物を通じて、できることを紹介するポートフォリオです。各作品の目的、使用技術、工夫をまとめています。掲載内容は現在サンプルです。",
    "location": "Osaka, JP",
    "contact": {
      "label": "k.az9912.",
      "email": "k.az9912.contact@gmail.com"
    },
    "social": [
      {
        "label": "GitHub",
        "url": "https://github.com/k-az9912"
      }
    ]
  },
  "projects": [
    {
      "id": "techfeed",
      "title": "TechFeed",
      "label": "ANDROID APPLICATION",
      "description": "IT系ニュースのフィードアプリ。RSS／Atomの取得、配信元・話題タグでの絞り込み、記事の一時保存、英語記事の端末内日本語翻訳に対応。",
      "summary": "ITニュースの収集・絞り込み・保存・翻訳をひとつに。",
      "tags": [
        "Kotlin",
        "Jetpack Compose",
        "Material 3",
        "Hilt",
        "Room",
        "DataStore",
        "ML Kit"
      ],
      "sourceUrl": "https://github.com/k-az9912/TechFeed",
      "demoUrl": "",
      "sections": [
        [
          "主な機能",
          "RSS／Atomフィードの取得、HTTPSフィードの追加・削除、配信元・タグでの絞り込み、表示設定と並べ替え、カスタムタグ、記事タイトル・概要の一時保存に対応。英語記事はML Kitで端末内翻訳し、原文と切り替え可能。"
        ],
        [
          "技術構成",
          "Kotlin・Jetpack Compose・Material 3で画面を構築。ViewModel・StateFlow・Coroutines・Hiltで状態管理と依存性の注入を行い、Room・DataStoreで保存と設定を管理。"
        ],
        [
          "テスト・継続的インテグレーション",
          "JUnit・Compose Test・Espressoを使用。GitHub ActionsでPRおよびdevelop／mainへのpush時にlint・JUnit・debugビルドを実行し、検証レポートを7日間保存。pre-commitとGitleaksによる検査にも対応。"
        ],
        [
          "利用条件・制約",
          "Android 8.0以上に対応。更新は起動時と手動操作時のみ。翻訳モデルは初回ダウンロードが必要。記事本文は配信元のページで表示。"
        ]
      ]
    }
  ],
  "skills": [
    {
      "title": "モバイルアプリ開発",
      "description": "スマートフォン向けのアプリ開発",
      "children": [
        {
          "title": "Android",
          "description": "AndroidU(モバイル/TV)アプリの設計、実装、テスト、リリースまで一貫した対応が可能。",
          "languages": [
            "Java",
            "Kotlin",
            "C++"
          ],
          "libraries": [
            "Jetpack",
            "AndroidX Leanback",
            "Compose",
            "Room",
            "Hilt",
            "DataStore"
          ],
          "tools": [
            "Android Studio"
          ],
          "githubLinks": [
            {
              "label": "IT系ニュースのフィードアプリ（モバイル）",
              "url": "https://github.com/k-az9912/TechFeed"
            }
          ]
        },
        {
          "title": "Dart / Flutter",
          "description": "画面遷移、データ保存、API通信を備えたiOS・Android両対応のクロスプラットフォームアプリの作成が可能。",
          "languages": [
            "Dart"
          ],
          "libraries": [
            "Flutter",
            "Riverpod",
            "go_router",
            "http",
            "dio"
          ],
          "tools": [
            "VSCode",
            "Google ML Kit"
          ],
          "githubLinks": [
            {
              "label": "OCR機能の学習向けアプリ",
              "url": "https://github.com/k-az9912/flutter_learning"
            }
          ]
        }
      ]
    },
    {
      "title": "Web開発",
      "description": "WebサイトやWebアプリの画面・APIを開発します。",
      "children": [
        {
          "title": "Java / Spring Boot",
          "description": "業務Webアプリのフロント、バックの一貫した設計、開発が可能。",
          "languages": [
            "Java",
            "SQL"
          ],
          "libraries": [
            "Spring Boot",
            "Spring Data JPA",
            "JUnit"
          ],
          "tools": [
            "Eclipse",
            "VSCode",
            "PostgreSQL"
          ],
          "githubLinks": []
        },
        {
          "title": "TypeScript / React",
          "description": "フォームや一覧画面を実装し、APIと連携するWeb UIの作成が可能。",
          "languages": [
            "TypeScript",
            "HTML",
            "CSS"
          ],
          "libraries": [
            "React",
            "Vite"
          ],
          "tools": [
            "VSCode"
          ],
          "githubLinks": []
        },
        {
          "title": "Python / FastAPI",
          "description": "データの取得・更新を行うAPIを設計・実装が可能。",
          "languages": [
            "Python",
            "SQL"
          ],
          "libraries": [
            "FastAPI"
          ],
          "tools": [
            "VSCode"
          ],
          "githubLinks": []
        },
        {
          "title": "Delphi",
          "description": "業務Webアプリのフロント、バックの一貫した設計、開発が可能。",
          "languages": [
            "Delphi"
          ],
          "libraries": [],
          "tools": [
            "RAD Studio"
          ],
          "githubLinks": []
        }
      ]
    },
    {
      "title": "クラウド開発",
      "description": "",
      "children": [
        {
          "title": "AWS",
          "description": "小売業向けの受発注・在庫・売上管理を想定したバックエンドをAWS上に構築した経験あり。\n業務API、データベース、外部システム連携を設計し、認証・権限、監視、バックアップまで整備可能。",
          "languages": [
            "Python",
            "SQL"
          ],
          "libraries": [],
          "tools": [
            "AWS",
            "lambda",
            "RDS(Aurora)",
            "SQS",
            "IAM",
            "CloudWatch"
          ],
          "githubLinks": []
        },
        {
          "title": "AWS / Terraform",
          "description": "AWS上のクラウド環境やアクセス権限を設定し、構成をコードで管理可能。",
          "languages": [
            "HCL"
          ],
          "libraries": [],
          "tools": [
            "AWS",
            "Terraform"
          ],
          "githubLinks": []
        }
      ]
    }
  ],
  "commonTools": [
    {
      "name": "Codex",
      "description": "カスタムスキルとMCPの使用および、ハーネスエンジニアリング、自動テストによるフィードバックループ設計の構築が可能。"
    },
    {
      "name": "Git",
      "description": "変更履歴の管理、ブランチを使った開発、差分の確認。"
    },
    {
      "name": "GitHub",
      "description": "基本的な業務の遂行、GitHub Actionsによるテストやデプロイの自動化構築。"
    },
    {
      "name": "Docker",
      "description": "開発・実行環境のコンテナ化と環境の共有。"
    },
    {
      "name": "VS Code",
      "description": "コード編集、デバッグ、開発環境の設定。"
    }
  ]
};
