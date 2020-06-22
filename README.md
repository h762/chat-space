## users table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many :users_groups
- has_many :chats
- has_many :groups, through: :users_groups

## chats table

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|content|text|null: false|
|image|string|------|

### Association
- belongs_to :users
- belongs_to :groups

## groups table

|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false, unique: true|

### Association
- has_many :users_groups
- has_many :chats
- has_many :users, through: :users_groups

## users_groups table
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :users
- belongs_to :groups
