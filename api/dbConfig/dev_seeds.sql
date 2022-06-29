--
-- ─── DATABASE: DEV SEEDS ────────────────────────────────────────────────────────
--

INSERT INTO users (username, email, password_digest, habit_streak)
VALUES
    ('Terry10', 'terry10@gmail.com', 'abc123', 0),
    ('Sam11', 'sam11@hotmail.com', 'def456', 7),
    ('Ben12', 'ben12@gmail.com', 'ghi789', 2);

INSERT INTO habits (name, frequency, time, comment, isComplete, user_id)
VALUES
    (
        'Stay hydrated', 
        1, 
        13,
        NULL,
        TRUE,
        1
    ),

    (
        'Eat a fruit', 
        3, 
        17, 
        'some comment about fruits', 
        FALSE,
        2
    ),

    (
        'Have fun', 
        2, 
        18, 
        'some comment about artistic activity',
        TRUE,
        1
    ),

    (
        'Exercise', 
        1, 
        8, 
        NULL,
        TRUE,
        3
    ),
    
    (
        'Get fresh air', 
        1, 
        10, 
        NULL,
        FALSE,
        3
    ),

    (
        'Floss', 
        2, 
        21, 
        'I have nice teeth',
        FALSE,
        1
    ),

    (
        'Sleep', 
        1, 
        22,
        'Relax',
        TRUE,
        2
    ),

    (
        'Tidy up my room', 
        3, 
        19,
        NULL,
        TRUE,
        3
    );

