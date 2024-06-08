import { ButtonStyle, EmbedBuilder, ButtonBuilder } from 'discord.js';
const data = new Set();
import { getRandomString, getRandomSentence, convertTime, randomHexColor } from '../../functions/function.ts';
import chalk from 'chalk';
import type { Chaos } from '../../typings/index.d.ts';

export default async (options:Chaos) => {
	if (!options.message) {
		throw new Error(`${chalk.red('Weky Error:')} message argument was not specified.`);
	}
	if (typeof options.message !== 'object') {
		throw new TypeError(`${chalk.red('Weky Error:')} Invalid Discord Message was provided.`);
	}

	if (!options.embed) options.embed = {};
	if (typeof options.embed !== 'object') {
		throw new TypeError(`${chalk.red('Weky Error:')} embed must be an object.`);
	}

	if (!options.embed.title) {
		options.embed.title = 'Chaos Words | Weky Development';
	}
	if (typeof options.embed.title !== 'string') {
		throw new TypeError(`${chalk.red('Weky Error:')} embed title must be a string.`);
	}

	if (!options.embed.description) {
		options.embed.description =
			'You have **{{time}}** to find the hidden words in the below sentence.';
	}
	if (typeof options.embed.description !== 'string') {
		throw new TypeError(`${chalk.red('Weky Error:')} embed description must be a string.`);
	}

	if (!options.embed.field1) options.embed.field1 = 'Sentence:';
	if (typeof options.embed.field1 !== 'string') {
		throw new TypeError(`${chalk.red('Weky Error:')} field1 must be a string.`);
	}

	if (!options.embed.field2) {
		options.embed.field2 = 'Words Found/Remaining Words:';
	}
	if (typeof options.embed.field2 !== 'string') {
		throw new TypeError(`${chalk.red('Weky Error:')} field2 must be a string.`);
	}

	if (!options.embed.field3) options.embed.field3 = 'Words found:';
	if (typeof options.embed.field3 !== 'string') {
		throw new TypeError(`${chalk.red('Weky Error:')} field3 must be a string.`);
	}

	if (!options.embed.field4) options.embed.field4 = 'Words:';
	if (typeof options.embed.field4 !== 'string') {
		throw new TypeError(`${chalk.red('Weky Error:')} field4 must be a string.`);
	}

	if (!options.embed.color) options.embed.color = 'Blurple';
	if (typeof options.embed.color !== 'string') {
		throw new TypeError(`${chalk.red('Weky Error:')} color must be a string.`);
	}

	if (!options.embed.footer) {
		options.embed.footer = '©️ Weky Development';
	}
	if (typeof options.embed.footer !== 'string') {
		throw new TypeError(`${chalk.red('Weky Error:')} footer must be a string.`);
	}

	if (!options.embed.timestamp) options.embed.timestamp = true;
	if (typeof options.embed.timestamp !== 'boolean') {
		throw new TypeError(`${chalk.red('Weky Error:')} timestamp must be a boolean.`);
	}

	if (!options.winMessage) {
		options.winMessage = 'GG, You won! You made it in **{{time}}**.';
	}
	if (typeof options.winMessage !== 'string') {
		throw new TypeError(`${chalk.red('Weky Error:')} winMessage must be a string.`);
	}

	if (!options.loseMessage) options.loseMessage = 'Better luck next time!';
	if (typeof options.loseMessage !== 'string') {
		throw new TypeError(`${chalk.red('Weky Error:')} loseMessage must be a string.`);
	}

	if (!options.wrongWordMessage) {
		options.wrongWordMessage =
			'Wrong Guess! You have **{{remaining_tries}}** tries left.';
	}
	if (typeof options.wrongWordMessage !== 'string') {
		throw new TypeError(`${chalk.red('Weky Error:')} wrongWordMessage must be a string.`);
	}

	if (!options.correctWordMessage) {
		options.correctWordMessage =
			'GG, **{{word}}** was correct! You have to find **{{remaining}}** more word(s).';
	}
	if (typeof options.correctWordMessage !== 'string') {
		throw new TypeError(`${chalk.red('Weky Error:')} correctWordMessage must be a string.`);
	}

	if (!options.time) options.time = 60000;
	if (options.time < 10000) {
		throw new TypeError(`${chalk.red('Weky Error:')} time must be greater than 10000.`);
	}
	if (typeof options.time !== 'number') {
		throw new TypeError(`${chalk.red('Weky Error:')} time must be a number.`);
	}

	if (!options.words) {
		options.words = getRandomSentence(Math.floor(Math.random() * 6) + 2);
	}
	if (typeof options.words !== 'object') {
		throw new TypeError(`${chalk.red('Weky Error:')} words must be an array.`);
	}

	if (!options.charGenerated) {
		options.charGenerated = options.words.join('').length - 1;
	}
	if (typeof options.charGenerated !== 'number') {
		throw new TypeError(`${chalk.red('Weky Error:')} charGenerated must be a number.`);
	}

	if (!options.maxTries) options.maxTries = 10;
	if (typeof options.maxTries !== 'number') {
		throw new TypeError(`${chalk.red('Weky Error:')} maxTries must be a number.`);
	}

	if (!options.othersMessage) {
		options.othersMessage = 'Only <@{{author}}> can use the buttons!';
	}
	if (typeof options.othersMessage !== 'string') {
		throw new TypeError(`${chalk.red('Weky Error:')} othersMessage must be a string.`);
	}

	if (!options.buttonText) options.buttonText = 'Cancel';
	if (typeof options.buttonText !== 'string') {
		throw new TypeError(`${chalk.red('Weky Error:')} buttonText must be a string.`);
	}

	if (data.has(options.message.author.id)) return;
	data.add(options.message.author.id);

	const id =
		getRandomString(20) +
		'-' +
		getRandomString(20) +
		'-' +
		getRandomString(20) +
		'-' +
		getRandomString(20);

	let tries = 0;
	const array:any = [];
	let remaining = 0;
	const guessed:any = [];

	if (options.words.join('').length > options.charGenerated) {
		options.charGenerated = options.words.join('').length - 1;
	}

	for (let i = 0; i < options.charGenerated; i++) {
		array.push(
			'abcdefghijklmnopqrstuvwxyz'.charAt(
				Math.floor(Math.random() * 'abcdefghijklmnopqrstuvwxyz'.length),
			),
		);
	}

	options.words.forEach((e:any) => {
		array.splice(Math.floor(Math.random() * array.length), 0, e);
	});

	const arr = array.join('');

	const embed = new EmbedBuilder()
		.setTitle(options.embed.title)
		.setDescription(
			options.embed.description.replace('{{time}}', convertTime(options.time)),
		)
		.addFields({ name: options.embed.field1, value: array.join('') })
		.addFields({ name: options.embed.field2, value: `0/${options.words.length}` })
		.setFooter({ text: options.embed.footer })
		.setColor(options.embed.color);
	if (options.embed.timestamp) {
		embed.setTimestamp();
	}

	let btn1 = new ButtonBuilder()
		.setStyle(ButtonStyle.Danger)
		.setLabel(options.buttonText)
		.setCustomId(id);

	const mes = await options.message.reply({
		embeds: [embed],
		components: [{ type: 1, components: [btn1] }],
	});

	const gameCreatedAt = Date.now();
	const filter = (m:any) => m.author.id === options.message.author.id;
	const game = await options.message.channel.createMessageCollector({
		filter,
		time: options.time,
	});

	game.on('collect', async (msg:any) => {
		if (options.words === undefined) return;
		const condition =
			options.words.includes(msg.content.toLowerCase()) &&
			!guessed.includes(msg.content.toLowerCase());
		if (condition) {
			remaining++;
			array.splice(array.indexOf(msg.content.toLowerCase()), 1);
			guessed.push(msg.content.toLowerCase());
			const _embed = new EmbedBuilder()
				.setTitle(options.embed?.title ? options.embed.title : 'Chaos Words | M3rcena Development')
				.setDescription(
					options.embed.descriptions.replace(
						'{{time}}',
						convertTime(options.time),
					),
				)
				.addFields({ name: options.embed.field1, value: array.join('') })
				.addFields({ name: options.embed.field3, value: `${guessed.join(', ')}` })
				.addFields({ name: options.embed.field2, value: `${remaining}/${options.words.length}` })
				.setFooter({ text: options.embed.footer })
				.setColor(options.embed.color);
			if (options.embed.timestamp) {
				_embed.setTimestamp();
			}
			btn1 = new ButtonBuilder()
				.setStyle(ButtonStyle.Danger)
				.setLabel(options.buttonText)
				.setCustomId(id);
			mes.edit({
				embeds: [_embed],
				components: [
					{
						type: 1,
						components: [btn1],
					},
				],
			});
			if (remaining === options.words.length) {
				btn1 = new ButtonBuilder()
					.setStyle(ButtonStyle.Danger)
					.setLabel(options.buttonText)
					.setDisabled()
					.setCustomId(id);
				mes.edit({
					embeds: [embed],
					components: [
						{
							type: 1,
							components: [btn1],
						},
					],
				});
				const time = convertTime(Date.now() - gameCreatedAt);
				const __embed = new EmbedBuilder()
					.setTitle(options.embed.title)
					.addFields({ name: options.embed.field1, value: arr })
					.setDescription(options.winMessage.replace('{{time}}', time))
					.addFields({ name: options.embed.field4, value: `${options.words.join(', ')}` })
					.setFooter({ text: options.embed.footer })
					.setColor(options.embed.color);
				if (options.embed.timestamp) {
					__embed.setTimestamp();
				}
				options.message.reply({
					embeds: [__embed],
				});
				data.delete(options.message.author.id);
				return game.stop();
			}
			const __embed = new EmbedBuilder()
				.setDescription(
					`${options.correctWordMessage
						.replace('{{word}}', msg.content.toLowerCase())
						.replace('{{remaining}}', options.words.length - remaining)}`,
				)
				.setColor(options.embed.color)
				.setFooter({ text: options.embed.footer });
			if (options.embed.timestamp) {
				__embed.setTimestamp();
			}
			options.message.reply({
				embeds: [__embed],
			});
		} else {
			tries++;
			if (tries === options.maxTries) {
				const _embed = new EmbedBuilder()
					.setTitle(options.embed.title)
					.setDescription(options.loseMessage)
					.addFields({ name: options.embed.field1, value: arr })
					.addFields({ name: options.embed.field4, value: `${options.words.join(', ')}` })
					.setFooter({ text: options.embed.footer })
					.setColor(options.embed.color);
				if (options.embed.timestamp) {
					_embed.setTimestamp();
				}
				btn1 = new ButtonBuilder()
					.setStyle(ButtonStyle.Danger)
					.setLabel(options.buttonText)
					.setDisabled()
					.setCustomId(id);
				mes.edit({
					embeds: [embed],
					components: [
						{
							type: 1,
							components: [btn1],
						},
					],
				});
				options.message.reply({
					embeds: [_embed],
				});
				data.delete(options.message.author.id);
				return game.stop();
			}
			const _embed = new EmbedBuilder()
				.setDescription(
					`${options.wrongWordMessage.replace(
						'{{remaining_tries}}',
						`${options.maxTries - tries}`,
					)}`,
				)
				.setColor(options.embed.color)
				.setFooter({ text: options.embed.footer });
			if (options.embed.timestamp) {
				_embed.setTimestamp();
			}
			options.message.reply({
				embeds: [_embed],
			});
		}
	});

	game.on('end', (msg:any, reason:any) => {
		if (reason === 'time') {
			const _embed = new EmbedBuilder()
				.setTitle(options.embed.title)
				.setDescription(options.loseMessage)
				.addFields({ name: options.embed.field1, value: arr })
				.addFields({ name: options.embed.field4, value: `${options.words.join(', ')}` })
				.setFooter({ text: options.embed.footer })
				.setColor(options.embed.color);
			if (options.embed.timestamp) {
				_embed.setTimestamp();
			}
			btn1 = new ButtonBuilder()
				.setStyle(ButtonStyle.Danger)
				.setLabel(options.buttonText)
				.setDisabled()
				.setCustomId(id);
			mes.edit({
				embeds: [embed],
				components: [
					{
						type: 1,
						components: [btn1],
					},
				],
			});
			data.delete(options.message.author.id);
			options.message.reply({
				embeds: [_embed],
			});
		}
	});

	const gameCollector = mes.createMessageComponentCollector({
		filter: (fn:any) => fn,
	});

	gameCollector.on('collect', async (button:any) => {
		if (button.user.id !== options.message.member.id) {
			return button.reply({
				content: options.othersMessage.replace(
					'{{author}}',
					options.message.member.id,
				),
				ephemeral: true,
			});
		}

		await button.deferUpdate();

		btn1 = new ButtonBuilder()
			.setStyle(ButtonStyle.Danger)
			.setLabel(options.buttonText)
			.setDisabled()
			.setCustomId(id);
		mes.edit({
			embeds: [embed],
			components: [
				{
					type: 1,
					components: [btn1],
				},
			],
		});
		const _embed = new EmbedBuilder()
			.setTitle(options.embed.title)
			.setDescription(options.loseMessage)
			.addFields({ name: options.embed.field1, value: arr })
			.addFields({ name: options.embed.field4, value: `${options.words.join(', ')}` })
			.setFooter({ text: options.embed.footer })
			.setColor(options.embed.color);
		if (options.embed.timestamp) {
			_embed.setTimestamp();
		}
		options.message.reply({
			embeds: [_embed],
		});
		data.delete(options.message.author.id);
		gameCollector.stop();
		return game.stop();
	});
};