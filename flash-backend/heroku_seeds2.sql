INSERT INTO transactions (products, user_id, total)
VALUES
  (ARRAY[1,23], 1, 299800),
  (ARRAY[51,80], 1, 52888),
  (ARRAY[21,48], 1, 899000);

INSERT INTO reviews (user_id, first_name, last_name, product_id, review_body)
VALUES
    (1, 'demo', 'user', 1, 'Excellent camera for the price!'),
    (1, 'demo', 'user', 7, 'Perfect for both studio and outdoors.'),
    (1, 'demo', 'user', 22, 'Superb build quality and excellent image quality!'),
    (1, 'demo', 'user', 11, 'Very versatile. Cannot beat this camera for video.'),
    (1, 'demo', 'user', 18, 'Low-light performance is great. Excellent for video work!');