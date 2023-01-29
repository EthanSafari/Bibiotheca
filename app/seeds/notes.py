from app.models import db, Note, environment, SCHEMA


def seed_notes():
    note1 = Note(
    name='Dinosaurs', trash= True, user_id= 2, notebook_id= 1,
    body = """
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
    in culpa qui officia deserunt mollit anim id est laborum.
    """)
    note2 = Note(
    name='Lorem', user_id= 2, notebook_id= 2,
    body = """
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
    in culpa qui officia deserunt mollit anim id est laborum.
    """)
    note3 = Note(
    name='Lorem Ipsum', user_id= 2, notebook_id= 2,
    body = """
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
    in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
    in culpa qui officia deserunt mollit anim id est laborum.
    """)
    note4 = Note(
    name='Lorem Ipsum Longer', user_id= 2, notebook_id= 2,
    body = """
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
    in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
    in culpa qui officia deserunt mollit anim id est laborum.
    """)
    note5 = Note(
    name='Lorem Ipsum Even Longer', user_id= 2, notebook_id= 3,
    body = """
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
    in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
    in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
    in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
    in culpa qui officia deserunt mollit anim id est laborum.
    """)
    note6 = Note(
    name='Lorem Ipsum Longer but not longest', user_id= 2, notebook_id= 2,
    body = """
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
    in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
    in culpa qui officia deserunt mollit anim id est laborum.
    """)
    note7 = Note(
    name='Lorem Ipsum Plato', user_id= 3, notebook_id= 4,
    body = """
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
    in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
    in culpa qui officia deserunt mollit anim id est laborum.
    """)
    note8 = Note(
    name='Lorem Plato', user_id= 3, notebook_id= 4,
    body = """
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
    in culpa qui officia deserunt mollit anim id est laborum.
    """)
    note9 = Note(
    name='L Plato', user_id= 3, notebook_id= 5, trash=True,
    body = """
    Lorem ipsum
    """)
    note10 = Note(
    name='Lorem Ipsum Even Longer Plato', user_id= 2, notebook_id= 3,
    body = """
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
    in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
    in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
    in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
    in culpa qui officia deserunt mollit anim id est laborum.  Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
    in culpa qui officia deserunt mollit anim id est laborum.
    """)
    note11 = Note(
    name= 'Welcome To Bibliotheca!', user_id= 1, notebook_id= 7,
    body= """
    Hello, and Welcome to Bibliotheca! This website is here to serve more as an online adgenda/organizer for
    people. As I looked at the list of possible clones that a/A offered as templetes, I saw that they included
    'Evernote' among them. Tired of not having a note app that I liked, I decided to take the Evernote template
    and create my own Note application! Feel free to explore the application in it's current state. As of right now, there
    may not be much, but there are plans for the future! If you would like to check those plans out, you can do that
    by searching this url => https://github.com/EthanSafari/Bibliotheca/wiki . Thank you for checking the application out,
    and I do hope you like what you see! ~ A Note from your friendly neighborhood developer, Ethan :)
    """)
    note12 = Note(
    name= 'Getting Started', user_id= 1, notebook_id= 7,
    body= """
    When first starting out, You can create a notebook by pressing the '+ Add Notebook' button just above your list of notebooks.
    You can then access a notebook by pressing on it and you will see it's name displayed in the lefthand corner of the content box.
    If youre looking to edit a notebooks name, you can press the button beside its name in the content box, and edit it freely. Among
    creating new notebooks, you will be able to delete them as well by pressing the flame next to their name in your notebook list.
    When it comes to creating notes, you can do so by pressing the '+ Add Notebook' button just above the notes list tird to the
    current notebook. You can then click on the note to then load its contents in the content box. While showing the details of a current
    note within a notebook, you can then delete and edit those notes as you please with the buttons in the upper righthand corner of the
    content box. That should be enough information to get you started. Enjoy! :)
    """)

    notes = [note1, note2, note3, note4, note5, note6, note7, note8, note9, note10, note11, note12]

    for note in notes:
        db.session.add(note)

    db.session.commit()


def undo_notes():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.notes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM notes")

    db.session.commit()
