import List "mo:base/List";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
actor DKeeper {
    public type Note = {
        title: Text;
        content: Text;
    };

    stable var notes: List.List<Note> = List.nil<Note>();

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

    public func removeNote(id: Nat){
        let listFront = List.take(notes, id);
        let listBack = List.drop(notes, id+1);
        notes := List.append(listFront, listBack);
    };
};