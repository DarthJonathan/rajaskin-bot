const SteamUser = require('steam-user')
const SteamTotp = require('steam-totp')

const client = new SteamUser()

const logOnOptions = {
    accountName: 'byteforcebot',
    password: 'Byteforce2017',
    twoFactorCode: SteamTotp.generateAuthCode('2Q2pQW5hrUEtdBi5TMC4Q8iit6Y=')
};

client.logOn(logOnOptions);

client.on('loggedOn', () => {
    console.log("Logged on to steam");

    client.setPersona(SteamUser.Steam.EPersonaState.Online);

    //Set The Name of the account
    // client.setPersona(SteamUser.Steam.EPersonaState.Online, 'Jonathan');

    client.gamesPlayed(440);
});