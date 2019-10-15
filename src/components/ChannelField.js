import React from "react";
import Channel from "../containers/Channel";

const ChannelField = () => (
	<div className="row">
		<Channel channelName="TECHCRUNCH" channelString="techcrunch" />
		<Channel channelName="HACKER NEWS" channelString="hacker-news" />
		<Channel channelName="DIE ZEIT" channelString="die-zeit" />
		<Channel channelName="WIRED" channelString="wired-de" />
		<Channel channelName="BBC" channelString="bbc-news" />
		<Channel channelName="POLYGON" channelString="polygon" />
	</div>
);

export default ChannelField;
