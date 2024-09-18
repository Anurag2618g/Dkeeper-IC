import List "mo:base/List";
import Text "mo:base/Text";
actor DKeeper {
    public type Note = {
        title: Text;
        content: Text;
    };

    var notes: List.List<Note> = List.nil<Note>();

    public func CreateNotes(newTitle: Text, newContent: Text) {
        let newNote: Note = {
            title = newTitle;
            content = newContent;
        };

        notes := List.push(newNote , notes);
    };

    public query func readNotes(): async [Note] {
        return List.toArray(notes);
    };
};