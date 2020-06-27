class Chat < ApplicationRecord
  belongs_to :user
  belongs_to :group

  validates :content, presence: true, unless: :image?
  validates :user_id, presence: true
  validates :group_id, presence: true

  mount_uploader :image, ImageUploader
end
