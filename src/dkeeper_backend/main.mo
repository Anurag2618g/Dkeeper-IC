import List "mo:base/List";
import Text "mo:base/Text";
actor DKeeperBackend {
    public type Note = {
        title: Text;
        content: Text;
    };
};