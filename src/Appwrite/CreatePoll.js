import { databases } from "./AppWrite";
import {ID} from "appwrite"

export default function AddNote(pollData){

const promise = databases.createDocument(
    '6713bf65000170eae0d3',
    '6713c1420021beabc9b3',
    ID.unique(),
    {}
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
}