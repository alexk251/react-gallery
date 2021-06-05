CREATE TABLE "gallery" (
		"id" SERIAL PRIMARY KEY,
	"path" VARCHAR (250) NOT NULL,
	"description" VARCHAR (250) NOT NULL,
	"likes" INT DEFAULT 0
);

INSERT INTO "gallery"
	("path", "description")
VALUES
	('https://media.musiciansfriend.com/is/image/MMGS7/L46959000001000-00-500x500.jpg', 'Strandberg Boden Standard 6 Electric Guitar  Black Flame'),
    ('https://cdn.shopify.com/s/files/1/0296/7607/7115/products/ABASILARADA8CHARCOAL4800FLAT_5000x.jpg?v=1602378893', 'LARADA 8 // LEGION // CHARCOAL BURL'),
    ('https://lh3.googleusercontent.com/proxy/GqNc-qAa1v5Y_nBUOiAfkgpR01S8Ar5V4lD6VuDs58QkPkvspRQ6Cj2ZYZr-93bLo38F8oCTuVllpqwQbYbCD2ndYzDh9uDO5mLLb3FelIy3l4Q', 'Klein Guitars - Klein Guitars - Ed Roman King of Guitars'),
    ('https://cdn11.bigcommerce.com/s-dks6ju/images/stencil/1280x1280/products/9808/93151/p0812021_01__31496.1459973812.jpg?c=2', '2008 PARKER FLY MOJO ELECTRIC GUITAR QUILT TOP GREEN SUNBURST'), 
    ('https://c1.zzounds.com/media/productmedia/fit,600by800/quality,85/1_Full_Straight_Front_NA-b166a1a6240fd86f6ec781519ee946f4.jpg', 'Guild A-150 Savoy Hollowbody Electric Guitar'), 
    ('https://c1.zzounds.com/media/productmedia/fit,600by800/quality,85/1_Full_Straight_Front_NA-c5be6f3ff3b526c00ccfe5fc045c2086.jpg', 'Gibson ES-335 Figured Electric Guitar');