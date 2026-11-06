import { GuildMember, TextBasedChannel } from "@fluxerjs/core";
declare const version = "0.1.0";
type GuildTextBasedChannel = Extract<TextBasedChannel, {
  guildId: any;
}>;
declare function isCommunicationDisabled(member: GuildMember): boolean;
export { GuildTextBasedChannel, isCommunicationDisabled, version };
//# sourceMappingURL=index.d.cts.map