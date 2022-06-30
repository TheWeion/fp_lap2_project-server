--
-- ─── DATABASE: DEV SEEDS ────────────────────────────────────────────────────────
--

INSERT INTO users (username, email, password_digest, habit_streak)
VALUES
    ('Terry10', 'terry10@gmail.com', 'abc123', 0),
    ('Sam11', 'sam11@hotmail.com', 'def456', 7),
    ('Ben12', 'ben12@gmail.com', 'ghi789', 2);

INSERT INTO habits (name, frequency, time, comment, is_complete, user_id)
VALUES
    (
        'Stay hydrated', 
        1, 
        '13:00:00',
        NULL,
        true,
        1
    ),

    (
        'Eat a fruit', 
        3, 
        '13:00:00', 
        'some comment about fruits', 
        false,
        2
    ),

    (
        'Have fun', 
        2, 
        '13:00:00', 
        'some comment about artistic activity',
        true,
        1
    ),

    (
        'Exercise', 
        1, 
        '13:00:00', 
        NULL,
        true,
        3
    ),
    
    (
        'Get fresh air', 
        1, 
        '13:00:00', 
        NULL,
        false,
        3
    ),

    (
        'Floss', 
        2, 
        '13:00:00', 
        'I have nice teeth',
        false,
        1
    ),

    (
        'Sleep', 
        1, 
        '13:00:00',
        'Relax',
        true,
        2
    ),

    (
        'Tidy up my room', 
        3, 
        '13:00:00',
        NULL,
        true,
        3
    );

