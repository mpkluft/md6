https://xakep.ru/2014/05/30/bower-package-manager/ -  bower 
http://webhamster.ru/site/page/index/articles/comp/171 - git

>>>fonts
http://fonts4web.ru/

>>>> icons
https://fortawesome.github.io/Font-Awesome/

>>> menus
http://www.internet-technologies.ru/articles/article_2149.html


>>> sublime commands 
ctr shift C - color picker

>>> git command
git init
git commit -m "first commit"
git remote add origin git@github.com:mpkluft/landing.git
git push -u origin master
git remote rm origin

>>> 
circle - border-radius: 50%
>>>
position: absolute;  left:50% + margin-left: -width/2
>>>
display:table;, display:table-row; и display:table-cell;

>>>>>>> 79e46d8ec6ccabcb2d91581f161e42ebaa82c6bd
�������� ������� �� SVG 
������� ��� ����� ��� ������� � svg - svg � -svgSource (��� ��������������) + ������� PNG ��� ���������
���� ��� �������� ����� ��������� svg to ttf https://cloudconvert.com/svg-to-ttf
ttf ��������  ����� http://www.fontsquirrel.com/

>>>>>> mysql command
>>enter
mysql -u username -p	
SHOW DATABASES;
USE databasename;
SHOW TABLES;
>>> create 
CREATE DATABASE dbname;
>>>or
mysqladmin -u username -p create dbname;
>>>delete table
DROP TABLE tableName
>>> create user
CREATE USER 'bob'@'localhost' IDENTIFIED BY 'password';
>>> privileges
GRANT ALL PRIVILEGES ON wordpress_db.* to 'bob'@'localhost';
>>>add new column
ALTER TABLE Employees ADD COLUMN middle_name CHAR(10) NULL AFTER first_name;
>>>create table
CREATE TABLE news ( id int not null auto_increment, name varchar(150), tags varchar(40), date timestamp, text text, picture varchar(25),primary key(id);
>>>show tables
describe tablesName
>>dump
mysqldump -uadmin -pSuperPassword mydb_forum > mydb_forum.sql
>>load dump 
mysql -uadmin -pSuperPassword mydb_forum < mydb_forum.sql



