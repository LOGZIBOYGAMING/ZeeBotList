import { Command, CommandContext, Permission } from './command';

export default class HelpCommand implements Command {
    name = 'help';
    precondition: Permission = 'KICK_MEMBERS';
    
    execute = async (ctx: CommandContext) => {
        return ctx.channel.send(
            '🔨 `ZeeBots accept <bot> <reason>` -> accept bot user with reason\n' +
            '🅰 `ZeeBots add-badge <bot> <badge_name>` -> add a badge to a bot\n' +
            '🅰 `ZeeBots clear-badges <bot>` -> clear badges from a bot\n' +
            '🅰 `ZeeBots delete <bot> <reason>` -> delete a bot from the list\n' +
            '🔨 `ZeeBots decline <bot> <reason>` -> decline bot user with reason\n' +
            '🔨 `ZeeBots help` -> show this\n' +
            '✅ `ZeeBots ping` -> `ZeeBots ping` -> pong!\n' +
            '🔨 `ZeeBots q` -> show approval queue');
    }
}
