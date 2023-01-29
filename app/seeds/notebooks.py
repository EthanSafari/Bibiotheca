from app.models import db, Notebook, environment, SCHEMA

def seed_notebooks():
    notebook1 = Notebook(
        name= 'Dumb Questions', user_id= 2, trash=True)
    notebook2 = Notebook(
        name= 'Interesting Theories', user_id= 2)
    notebook3 = Notebook(
        name= 'Other Thoughts', user_id= 2)
    notebook4 = Notebook(
        name= 'Philosophies', user_id= 3)
    notebook5 = Notebook(
        name= 'Stupid Theories', user_id= 3, trash=True)
    notebook6 = Notebook(
        name= 'Great Ideas', user_id= 3)
    notebook7 = Notebook(
        name= 'Welcome!', user_id= 1)

    notebooks = [notebook1, notebook2, notebook3, notebook4, notebook5, notebook6, notebook7]

    for notebook in notebooks:
        db.session.add(notebook)

    db.session.commit()


def undo_notebooks():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.notebooks RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM notebooks")

    db.session.commit()
