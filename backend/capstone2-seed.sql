INSERT INTO users (username, first_name, last_name, password, email, is_admin)
VALUES ('testuser',
        'shaorn',
        'fahler',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        'joel@joelburton.com',
        FALSE),
       ('testadmin',
        'taylor',
        'verven',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        'joelly@joelburton.com',
        TRUE);

INSERT INTO videodata (videoid, title, link)
VALUES  ('-uc-PvM2cVs',
        'Cali&#39;s Summer Night Skin Care Routine!',
        'https://www.youtube.com/embed/-uc-PvM2cVs'),
        ('CXvG2CBJ3SE',
        'Olivia Rodrigo&#39;s Guide to Effortless Skin-Care and Makeup | Beauty Secrets | Vogue',
        'https://www.youtube.com/embed/CXvG2CBJ3SE'),
        ('m95Bkh7L4Uc',
        'MY DAUGHTERS SKiNCARE MORNiNG ROUTiNE💄🫧',
        'https://www.youtube.com/embed/m95Bkh7L4Uc');