--
-- ─── DATABASE: DEV SEEDS ────────────────────────────────────────────────────────
--

INSERT INTO users (username, email, password_digest)
VALUES
    ('Terry10', 'terry10@gmail.com', 'abc123'),
    ('Sam11', 'sam11@hotmail.com', 'def456'),
    ('Ben12', 'ben12@gmail.com', 'ghi789');

INSERT INTO habits (name, frequency, time, comment, isComplete, user_id)
VALUES
    (
        'Stay hydrated', 
        1, 
        13,
        NULL,
        true,
        1
    ),

    (
        'Eat a fruit', 
        3, 
        17, 
        'some comment about fruits', 
        false,
        2
    ),

    (
        'Have fun', 
        2, 
        18, 
        'some comment about artistic activity',
        true,
        1
    ),

    (
        'Exercise', 
        1, 
        8, 
        NULL,
        true,
        3
    ),
    
    (
        'Get fresh air', 
        1, 
        10, 
        NULL,
        false,
        3
    ),

    (
        'Floss', 
        2, 
        21, 
        'I have nice teeth',
        false,
        1
    ),

    (
        'Sleep', 
        1, 
        22,
        'Relax',
        true,
        2
    ),

    (
        'Tidy up my room', 
        3, 
        19,
        NULL,
        true,
        3
    );

