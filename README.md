## users table

|Column|Type|Options|
|------|----|-------|
|name|integer|null: false, unique: true|
|email|integer|null: false|
|password|integer|null: false|

### Association
- belongs_to :users_groups
- belongs_to :chats

## chats table

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|content|text|null: false|
|image|string||

### Association
- has_many :users
- has_many :groups

## groups table

|Column|Type|Options|
|------|----|-------|
|group_name|integer|null: false, unique: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :users_groups
- belongs_to :chats

## users_groups table
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- has_many :users
- has_many :groups
