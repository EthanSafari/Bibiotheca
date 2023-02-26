from app.models import db, Tag, environment, SCHEMA, User, Note

def seed_tags():
    tag1 = Tag(
        name= 'Demo',
        user_id= 1
    )
    tag2 = Tag(
        name= 'Demo2',
        user_id= 1
    )
    tag3 = Tag(
        name= 'Stuff',
        user_id= 2
    )
    tag4 = Tag(
        name= 'More Stuff',
        user_id= 2
    )
    tag5 = Tag(
        name= 'Other Things',
        user_id= 2
    )

    tags = [tag1, tag2, tag3, tag4, tag5]

    demo_notes = Note.query.filter(Note.user_id == 1).all()
    for i in range(len(demo_notes)):
        if demo_notes[i].user_id == tags[i].user_id:
            demo_notes[i].tags.append(tag1)
    demo_notes[0].tags.append(tag2)

    aristotle_notes = Note.query.filter(Note.user_id == 2).all()
    for j in range(len(aristotle_notes)):
        for k in range(len(tags)):
            if aristotle_notes[j].user_id == tags[k].user_id:
                aristotle_notes[j].tags.append(tags[k])

    for tag in tags:
        db.session.add(tag)

    db.session.commit()

def undo_tags():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.note_tags RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.tags RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM note_tags")
        db.session.execute("DELETE FROM tags")

    db.session.commit()
