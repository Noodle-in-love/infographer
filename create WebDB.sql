create database WebDB;
go
use WebDB;
go


CREATE TABLE Users(
	Login varchar(30) PRIMARY KEY CHECK (login BETWEEN '000' and 'ZZZZZZZZZZZZZZZZ'),
	Password varchar(512) NOT NULL,
	LastName varchar(40),
	FirstName varchar(40),
	EMail varchar(30) NOT NULL UNIQUE,  --CHECK (eMail LIKE '%@%.__%'),
	HomePhone varchar(15) DEFAULT '-' CHECK (HomePhone LIKE '_-_____-_______' or HomePhone='-'),
	MobilePhone varchar(15)  DEFAULT '-' CHECK (MobilePhone LIKE '_-___-___-__-__' or MobilePhone ='-'),
	JobPhone varchar(15) DEFAULT '-' CHECK (JobPhone LIKE '_-_____-_______' or JobPhone='-'),
	Fax varchar (15) DEFAULT '-' CHECK (Fax LIKE '_-_____-_______' or Fax='-'),
	Birthday Date,
	Country varchar(15),
	City varchar(20),
	Adress varchar(30),
	Sex char(1) DEFAULT '-' CONSTRAINT sex_constr CHECK (Sex = 'F' OR Sex = 'M' OR Sex = 'f' OR Sex = 'm' OR Sex = '-'),
	Modificators char(9) NOT NULL DEFAULT '000000000' --CHECK (LEN(Modificator) = 9),
	CONSTRAINT modLength CHECK (LEN(Modificators) = 9)
	);

CREATE TABLE Friends(
	userOne varchar(30),
	userTwo varchar(30),
	PRIMARY KEY (userOne,userTwo),
	FOREIGN KEY (userOne) REFERENCES Users
		ON DELETE CASCADE
	);

CREATE TABLE Income(
	Login varchar(30) PRIMARY KEY,
	Date date NOT NULL,
	Profit money NOT NULL,
	IncomingType varchar(10) NOT NULL,
	FOREIGN KEY (Login) REFERENCES Users
		ON UPDATE CASCADE
		ON DELETE CASCADE
	);

CREATE TABLE Schedule(
	Login varchar(30),
	ScheduleID INT IDENTITY,
	Modificator Char(1) DEFAULT (0) CHECK (Modificator = '1' OR Modificator = '0'),
	Date date NOT NULL,
	Name varchar(50) NOT NULL DEFAULT GETDATE(),
	FOREIGN KEY (Login) REFERENCES Users
		ON UPDATE CASCADE
		ON DELETE CASCADE,
	PRIMARY KEY(Login, ScheduleID)
	);

CREATE TABLE ScheduleRows(
	Login varchar(30),
	ScheduleID INT PRIMARY KEY,
	Name varchar (15),
	Task text NOT NULL,
	BeginDate date NOT NULL,
	EndDate date NOT NULL,
	BeginTime time  NOT NULL,
	EndTime time NOT NULL,
	Performed char(1) NOT NULL CHECK (Performed = 'y' OR Performed = 'n'),
	Repeating char(1) NOT NULL CHECK (Repeating = 'y' OR Repeating = 'n'),
	FOREIGN KEY (Login,ScheduleID) REFERENCES Schedule
		ON UPDATE CASCADE
		ON DELETE CASCADE
	);

CREATE TABLE Goods(
	Name varchar(15) PRIMARY KEY
	);

CREATE TABLE Spending(
	Login varchar(30),
	GoodsID varchar(15),
	Date date NOT NULL,
	Amount INT NOT NULL,
	Price FLOAT NOT NULL,
	FOREIGN KEY (Login) REFERENCES	Users
		ON UPDATE CASCADE
		ON DELETE CASCADE,
	FOREIGN KEY (GoodsID) REFERENCES Goods
		ON DELETE NO ACTION,
	PRIMARY KEY (Login, GoodsID)
	);

CREATE TABLE Currency(
	CurrencyID INT IDENTITY PRIMARY KEY,
	Name varchar(20) NOT NULL
	);

CREATE TABLE Exchange(
	CurrencyID INT PRIMARY KEY,
	UpDown varchar(4) NOT NULL CHECK (UpDown = 'up' OR UpDown = 'down'),
	dollarExchange FLOAT NOT NULL CHECK (dollarExchange > 0.0)
	FOREIGN KEY (CurrencyID) REFERENCES Currency
		ON DELETE CASCADE
	);

CREATE TABLE Country(
	CountryID int IDENTITY PRIMARY KEY,
	Name varchar(30) NOT NULL
	);

CREATE TABLE CountryCurrency(
	CurrencyID INT,
	CountryID INT,
	PRIMARY KEY (CurrencyID, CountryID),
	FOREIGN KEY (CurrencyID) REFERENCES Currency,
	FOREIGN KEY (CountryID) REFERENCES Country
	);
	 create table City
	 (CityID Int primary key,
	 Name Char(30) not null)
	 ;