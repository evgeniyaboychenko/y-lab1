import { makeAutoObservable } from "mobx";
import { FormData, MockData } from "../types";
import axios from "axios";
import mockData from '../mock-data.json';

const checkingMockData = (formData: FormData, mockData: MockData[]) => {
	// mockData.find((elem:MockData ) => {
	// 	return (elem.email === formData.email) && (elem.password === formData.password)
	// });
    // return true;
};

class FormStore {
	isLoading = false;
	error = "";

	constructor(){
		makeAutoObservable(this);
	}

	onFormSubmit = async (formData: FormData) => {
			try {
				this.isLoading = true;
				const api = `https://api....`;
				const response = await axios.post(
					api,
					formData
				);
				if (response.status === 200) {
					this.isLoading = false;
					// runInAction(() => {
					//   //this.rate = response.data.data[targetCurrency].value;
					//   this.isLoading = false;
					// });
				}
			} catch (err) {
			  this.isLoading = false;
			  this.error = "Ошибка загрузки";
			  console.error(err);
			}
		  
	};

	handleFormSubmit = (evt:React.FormEvent<HTMLFormElement> ,formData: FormData) => {
		evt.preventDefault();
		this.onFormSubmit(formData);
	}
}

export default FormStore;