import { enterScreen, ENTER_SCREEN, createForm, CREATE_FORM, createCharacter, CREATE_CHARACTER, getCharacters, GET_CHARACTERS, deleteCharacter, DELETE_CHARACTER, setName, SET_NAME, setRace, SET_RACE, setClassification, SET_CLASSIFICATION, setWeapon, SET_WEAPON, updateCharacter, UPDATE_CHARACTER, setUpdate, SET_UPDATE } from './actions';

describe('enterScreen', () => {
    it('Should return the action', () => {
        const action = enterScreen();
        expect(action).toEqual({
            type: ENTER_SCREEN
        });
    });
});

describe('createForm', () => {
    it('Should return the action', () => {
        const action = createForm();
        expect(action).toEqual({
            type: CREATE_FORM
        });
    });
});

describe('createCharacter', () => {
    it('Should return the action', () => {
        const newCharacter = {};
        const action = createCharacter(newCharacter);
        expect(action).toEqual({
            type: CREATE_CHARACTER,
            newCharacter
        });
    });
});

describe('setName', () => {
    it('Should return the action', () => {
        const name = '';
        const action = setName(name);
        expect(action).toEqual({
            type: SET_NAME,
            name
        });
    });
});

describe('setRace', () => {
    it('Should return the action', () => {
        const race = '';
        const action = setRace(race);
        expect(action).toEqual({
            type: SET_RACE,
            race
        });
    });
});

describe('setClassification', () => {
    it('Should return the action', () => {
        const classification = '';
        const action = setClassification(classification);
        expect(action).toEqual({
            type: SET_CLASSIFICATION,
            classification
        });
    });
});

describe('setWeapon', () => {
    it('Should return the action', () => {
        const weapon = '';
        const action = setWeapon(weapon);
        expect(action).toEqual({
            type: SET_WEAPON,
            weapon
        });
    });
});

describe('getCharacters', () => {
    it('Should return the action', () => {
        const characters = [];
        const action = getCharacters(characters);
        expect(action).toEqual({
            type: GET_CHARACTERS,
            characters
        });
    });
});

describe('deleteCharacter', () => {
    it('Should return the action', () => {
        const id = '';
        const action = deleteCharacter(id);
        expect(action).toEqual({
            type: DELETE_CHARACTER,
            id
        });
    });
});

describe('setUpdate', () => {
    it('Should return the action', () => {
        const character = {};
        const action = setUpdate(character);
        expect(action).toEqual({
            type: SET_UPDATE,
            character
        });
    });
});

describe('updateCharacter', () => {
    it('Should return the action', () => {
        const updatedCharacter = {};
        const action = updateCharacter(updatedCharacter);
        expect(action).toEqual({
            type: UPDATE_CHARACTER,
            updatedCharacter
        });
    });
});