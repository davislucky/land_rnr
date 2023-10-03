# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  birth_date      :date             not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :first_name, :last_name, :birth_date, :password_digest, presence: true
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, presence: true, uniqueness: true
    before_validation :ensure_session_token

    has_secure_password

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        if user && user.authenticate(password)
            return user
        else
            nil
        end
    end

    def reset_session_token!
        self.session_token = generate_unique_session_token
        self.save!
        self.session_token
    end

    private

    def generate_unique_session_token
        loop do
            token = SecureRandom::urlsafe_base64
            return token unless User.exists?(session_token: token)
        end
    end

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end
end
