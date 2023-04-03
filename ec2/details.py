import sqlite3
import os
def init_folder_creation():
    if not os.path.exists ("details"):
        os.mkdir("details")
    if not os.path.exists("details.db"):
        conn = sqlite3.connect("details.db")
        create_table_cmd = "CREATE TABLE details ( Fname TEXT NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, Lname TEXT NOT NULL, Email TEXT NOT NULL )"
		conn.execute(create_table_cmd)
		conn.commit()

def create_folder(folder_name):
	if not os.path.exists(folder_name):
		os.mkdir(folder_name)

def store_in_db(Fname, Lname):
	conn = sqlite3.connect("details.db")
	cmd = "INSERT INTO details (Fname, Lname) VALUES (%s, \'%s\')" % (Fname, Lname)
	try:
		conn.execute(cmd)
	except sqlite3.IntegrityError:
		choice = input("Fname already exists. Want to change the record? (y/n): ")
		if choice.lower() == 'y':
			cmd = "UPDATE details SET Lname = \'%s\' WHERE Fname = %s" % (Lname, Fname)
			conn.execute(cmd)
		else:
			print("Doing nothing...")
			return
	conn.commit()
	