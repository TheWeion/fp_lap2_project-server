TRUNCATE users, habits RESTART IDENTITY;

INSERT INTO users (username, email, password)
VALUES
    ('Test User 1', 'test.user1@gmail.com', 'qwerty'),
    ('Test User 2', 'test.user2@hotmail.com', '987654');


INSERT INTO habits (name, frequency, time, comment, isComplete, user_id)
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
        'Journal', 
        1,
        7,
        NULL,
        true,
        1
    );

