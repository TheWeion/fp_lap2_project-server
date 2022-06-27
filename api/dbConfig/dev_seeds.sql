--
-- ─── DATABASE: DEV SEEDS ────────────────────────────────────────────────────────
--

INSERT INTO users (username, password)
VALUES
    ('Terry10', 'terry10@gmail.com', 'abc123'),
    ('Sam11', 'sam11@hotmail.com', 'def456'),
    ('Ben12', 'ben12@gmail.com', 'ghi789');

INSERT INTO habits (name, frequency, time, user_id)
VALUES
    ('Stay hydrated', 1, 13, 1),
    ('Eat a fruit', 3, 17, 2),
    ('Have fun', 2, 18, 1),
    ('Exercise', 1, 8, 3),
    ('Get fresh air', 1, 10, 3),
    ('Floss', 2, 21, 1),
    ('Sleep', 1, 22, 2),
    ('Tidy up my room', 3, 19, 3);

