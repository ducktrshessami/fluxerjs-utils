import { GuildMember, TextBasedChannel } from "@fluxerjs/core";
declare const version = "0.1.0";
type GuildTextBasedChannel = Extract<TextBasedChannel, {
  guildId: any;
}>;
declare function isCommunicationDisabled(member: GuildMember): boolean;
interface Manager<T = unknown> {
  fetch(id: string, ...args: any[]): Promise<T>;
  get(id: string): T | undefined;
}
declare function getOrFetch<M extends Manager>(manager: M, id: string): Promise<NonNullable<ReturnType<M["get"]>>>;
export { GuildTextBasedChannel, getOrFetch, isCommunicationDisabled, version };
//# sourceMappingURL=index.d.mts.map