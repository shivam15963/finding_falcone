import Vue from 'vue'  
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state:{
		selectedPlanets: [],
		token: '',
		searchResult: {},
		timeTaken: 0
	},
	getters: {
    	selectedPlanets: state => state.selectedPlanets,
    	token: state => state.token,
    	searchResult: state => state.searchResult,
    	timeTaken: state => state.timeTaken
	},
	mutations: {
		addPlanet(state, planet){
			state.selectedPlanets.push(planet);
		},
		removePlanet(state, planet){
			state.selectedPlanets.pop(planet);
		},
		updateToken(state, token){
			state.token = token;
		},
		updateSearchResult(state, searchResult){
			state.searchResult = searchResult;
		},
		updateTimeTaken(state, timeTaken){
			state.timeTaken = timeTaken;
		},
		resetAll(state){
			state.selectedPlanets = [];
			state.token = '';
			state.searchResult = {};
		}
	}
})