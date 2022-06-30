TRUNCATE users, habits RESTART IDENTITY;

INSERT INTO users (username, email, password_digest, habit_streak)
VALUES
    ('Test User 1', 'test.user1@gmail.com', 'qwerty', 7),
    ('Test User 2', 'test.user2@hotmail.com', '987654', 2);


INSERT INTO habits (name, frequency, time, comment, is_complete, user_id)
VALUES
    (
        'Meditate', 
        3,
        8,
        NULL,
        true,
        2
    ),

    (
        'Eat healthy', 
        2,
        19,
        'Smoothie recipe: banana, kale, lemon, blueberries',
        false,
        1
    ),

    (
        'Journaling', 
        1,
        7,
        NULL,
        true,
        1
    );

