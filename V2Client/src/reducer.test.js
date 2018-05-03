import reducer from './reducer';
import { enterScreen, createForm, createCharacter, getCharacters, deleteCharacter, setName, setRace, setClassification, setWeapon, updateCharacter, setUpdate } from './actions';


describe('reducer', () => {
    it('Should set the initial state when nothing is passed in', () => {
        const newState = reducer(undefined, {
            type: '@@UNKNOWN'
        });

        expect(newState).toEqual({
            characters: [],
            display: 'enter-screen',
            name: '',
            race: '',
            classification: '',
            weapon: ''
        });
    });

    it('Should return the correct state on an unknown action', () => {
        const state ={
            characters: [],
            display: 'enter-screen',
            name: 'John',
            race: 'Elf',
            classification: 'Orc',
            weapon: 'Hammer'
        };
        const newState = reducer(state, {
            type: '@@UNKNOWN'
        });

        expect(newState).toEqual(state); 
    });
    
    it('Should handle the enterScreen action', () => {
        const display = 'form';
        const state = {
            display: 'enter-screen'
        };
        const newState = reducer(state, enterScreen(display));

        expect(newState).toEqual({
            display: display
        });
    });

    it('Should handle the createForm action', () => {
        const update = {
            display: 'form',
            name: '',
            race: '',
            classification: '',
            weapon: ''};
        const state = {
            display: 'characters',
            name: 'John',
            race: 'Elf',
            classification: 'Knight',
            weapon: 'Sword'
        };
        const newState = reducer(state, createForm(update));

        expect(newState).toEqual({
            display: 'form',
            name: '',
            race: '',
            classification: '',
            weapon: ''
        });
    });

    it('Should handle the createCharacter action', () => {
        const newCharacter = {
            display: 'new-character',
            name: 'Billy',
            race: 'Golem',
            classification: 'Brute',
            weapon: 'Axe'};
        const state = {
            display: 'form',
            name: '',
            race: '',
            classification: '',
            weapon: ''
        };
        const newState = reducer(state, createCharacter(newCharacter));

        expect(newState).toEqual({
            display: 'new-character',
            name: 'Billy',
            race: 'Golem',
            classification: 'Brute',
            weapon: 'Axe'
        });
    });

    it('Should handle the setName action', () => {
        const name = 'John';
        const state = {
            name: ''
        };
        const newState = reducer(state, setName(name));

        expect(newState).toEqual({
            name: name
        });
    });

    it('Should handle the setRace action', () => {
        const race = 'Elf';
        const state = {
            race: ''
        };
        const newState = reducer(state, setRace(race));

        expect(newState).toEqual({
            race: race
        });
    });

    it('Should handle the setClassification action', () => {
        const classification = 'Knight';
        const state = {
            classification: ''
        };
        const newState = reducer(state, setClassification(classification));

        expect(newState).toEqual({
            classification: classification
        });
    });

    it('Should handle the setWeapon action', () => {
        const weapon = 'Axe';
        const state = {
            weapon: ''
        };
        const newState = reducer(state, setWeapon(weapon));

        expect(newState).toEqual({
            weapon: weapon
        });
    });

    it('Should handle the setUpdate action', () => {
        const updateForm = {
            display: 'update',
            name: 'Billy',
            race: 'Golem',
            classification: 'Brute',
            weapon: 'Axe'};
        const state = {
            display: 'characters',
            name: '',
            race: '',
            classification: '',
            weapon: ''
        };
        const newState = reducer(state, setUpdate(updateForm));

        expect(newState).toEqual({
            display: 'update',
            name: 'Billy',
            race: 'Golem',
            classification: 'Brute',
            weapon: 'Axe'
        });
    });

    it('Should handle the getCharacters action', () => {
        const characterList = [{}];
        const state = {
            characters: [],
            display: 'form'
        };
        const newState = reducer(state, getCharacters(characterList));

        expect(newState).toEqual({
            characters: [{}],
            display: 'characters'
        });
    });

    it('Should handle the deleteCharacter action', () => {
        const remove = [{}];
        const state = {
            characters: [{}]
        };
        const newState = reducer(state, deleteCharacter(remove));

        expect(newState).toEqual({
            characters: [{}]
        });
    });

    it('Should handle the updateCharacter action', () => {
        const update = {
            display: 'updated-character',
            name: '',
            race: '',
            classification: '',
            weapon: ''
        };
        const state = {
            display: 'update',
            name: 'John',
            race: 'Elf',
            classification: 'Cleric',
            weapon: 'Mace'
        };
        const newState = reducer(state, updateCharacter(update));

        expect(newState).toEqual({
            display: 'updated-character',
            name: '',
            race: '',
            classification: '',
            weapon: ''
        });
    });
});