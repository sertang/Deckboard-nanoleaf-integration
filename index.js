const { dialog } = require('electron');
const { Extension, log, INPUT_METHOD, PLATFORMS } = require('deckboard-kit');
const fs = require('fs')

const AuroraApi = require("nanoleaf-aurora-client")

fs.writeFileSync('C:\\Users\\Tanguy\\deckboard\\extensions\\nano-log.txt', `${new Date()} Début des logs`);

var api = new AuroraApi({
	host: '192.168.0.20',
	base: '/api/v1/',
	port: '16021',
	accessToken: 'sqh3NDIBKnOA4suWttqRpVzScDx9Ez0Q'
});


class PowerControlExtension extends Extension {
	constructor() {
		super();
		this.name = 'Power Option';
		this.platforms = [PLATFORMS.WINDOWS, PLATFORMS.MAC];
		this.inputs = [
			{
				label: 'Power Option',
				value: 'power-option',
				icon: 'power-off',
				color: '#34495e',
				input: [
					{
						label: 'On/Off',
						ref: 'powerAction',
						type: INPUT_METHOD.INPUT_SELECT,
						items: [
							{
								label: 'off',
								value: 'off'
							},
							{
								label: 'on',
								value: 'on'
							}
						]
					},
					{
						label: 'With Confirmation',
						ref: 'confirmation',
						type: INPUT_METHOD.INPUT_CHECKBOX,
						default: true
					}

				]
			},
			{
				label: 'Brightness Option',
				value: 'brightness-option',
				icon: 'power-off',
				color: '#34495e',
				input: [
					{
						label: 'Brightness',
						ref: 'brightnessAction',
						type: INPUT_METHOD.INPUT_SELECT,
						items: [
							{
								label: '10%',
								value: '10p'
							},
							{
								label: '20%',
								value: '20p'
							},
							{
								label: '30%',
								value: '30p'
							},
							{
								label: '40%',
								value: '40p'
							},
							{
								label: '50%',
								value: '50p'
							},
							{
								label: '60%',
								value: '60p'
							},
							{
								label: '70%',
								value: '70p'
							},
							{
								label: '80%',
								value: '80p'
							},
							{
								label: '90%',
								value: '90p'
							},
							{
								label: '100%',
								value: '100p'
							}
						]
					},
					{
						label: 'With Confirmation',
						ref: 'confirmation',
						type: INPUT_METHOD.INPUT_CHECKBOX,
						default: true
					}

				]
			},
			{
				label: 'Color Temperature',
				value: 'color-temperature',
				icon: 'power-off',
				color: '#34495e',
				input: [
					{
						label: 'Color Temperature',
						ref: 'tempAction',
						type: INPUT_METHOD.INPUT_SELECT,
						items: [
							{
								label: '6500K',
								value: '65K'
							},
							{
								label: '4500K',
								value: '45K'
							}
						]
					},
					{
						label: 'With Confirmation',
						ref: 'confirmation',
						type: INPUT_METHOD.INPUT_CHECKBOX,
						default: true
					}

				]
			}
		];
	}

	execute(action, { powerAction, brightnessAction, tempAction, confirmation = true }) {
		try {
			log.info(`${action} ${powerAction} ${brightnessAction} ${tempAction}`);
			switch (action) {
				case 'power-option': {
					switch (powerAction) {
						case 'off':
							api.turnOff()
								.catch(function (err) {
									console.error(err);
								});
							break;
						case 'on':
							api.turnOn()
								.catch(function (err) {
									console.error(err);
								});
							break;
						default:
							break;
					}
				}
				case 'brightness-option': {
					switch (brightnessAction) {
						case '10p':
							api.setBrightness(10)
								.then(function () {
									console.log('Success!');
								})
								.catch(function (err) {
									console.error(err);
								});
							break;
						case '20p':
							api.setBrightness(20)
								.then(function () {
									console.log('Success!');
								})
								.catch(function (err) {
									console.error(err);
								});
							break;
						case '30p':
							api.setBrightness(30)
								.then(function () {
									console.log('Success!');
								})
								.catch(function (err) {
									console.error(err);
								});
							break;
						case '40p':
							api.setBrightness(40)
								.then(function () {
									console.log('Success!');
								})
								.catch(function (err) {
									console.error(err);
								});
							break;
						case '50p':
							api.setBrightness(50)
								.then(function () {
									console.log('Success!');
								})
								.catch(function (err) {
									console.error(err);
								});
							break;
						case '60p':
							api.setBrightness(60)
								.then(function () {
									console.log('Success!');
								})
								.catch(function (err) {
									console.error(err);
								});
							break;
						case '70p':
							api.setBrightness(70)
								.then(function () {
									console.log('Success!');
								})
								.catch(function (err) {
									console.error(err);
								});
							break;
						case '80p':
							api.setBrightness(80)
								.then(function () {
									console.log('Success!');
								})
								.catch(function (err) {
									console.error(err);
								});
							break;
						case '90p':
							api.setBrightness(90)
								.then(function () {
									console.log('Success!');
								})
								.catch(function (err) {
									console.error(err);
								});
							break;
						case '100p':
							api.setBrightness(100)
								.then(function () {
									console.log('Success!');
								})
								.catch(function (err) {
									console.error(err);
								});
							break;
						default:
							break;
					}
				}
				case 'color-temperature': {
					switch (tempAction) {
						case '65K':
							api.setColourTemperature(6500)
								.then(function () {
									console.log('Success!');
								})
								.catch(function (err) {
									console.error(err);
								});
							break;
						case '45K':
							api.setColourTemperature(4500)
								.then(function () {
									console.log('Success!');
								})
								.catch(function (err) {
									console.error(err);
								});
							break;
						default:
							break;
					}
				}


			}
		} catch (error) {
			return fs.writeFileSync('C:\\Users\\Tanguy\\deckboard\\extensions\\nano-log.txt', `${new Date()} ${error}`);
		}
	}
}


module.exports = new PowerControlExtension();
