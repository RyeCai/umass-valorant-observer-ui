import os

import requests

def make_path(path: str):
    if not os.path.exists(path):
        os.makedirs(path)

def download_asset(icon: str, path: str, group: dict, file_name=""):
    if file_name:
        asset = open(os.path.join(path, f'{file_name}.png'), 'wb')
    else: 
        asset = open(os.path.join(path, f'{icon}.png'), 'wb')
    asset.write(requests.get(group[icon]).content)
    asset.close()

def agent_request():
    def playable(agent):
        return agent['isPlayableCharacter']
    agents = requests.get(AGENTS_URL)
    if agents:
        agent_list = filter(playable, agents.json()['data'])
        agents_path = os.path.join(os.curdir, 'agents')
        make_path(agents_path)
        for agent in agent_list:
            cur_path = os.path.join(agents_path, agent['displayName'].replace('/', ''))
            make_path(cur_path)
            download_asset('displayIcon', cur_path, agent)
            download_asset('fullPortraitV2', cur_path, agent)
            download_asset('killfeedPortrait', cur_path, agent)
            cur_path = os.path.join(cur_path, 'abilities')
            make_path(cur_path)
            for ability in agent['abilities']:
            # Numbered in order of how the ability icons appear in-game from left to right
                file = ability['displayName'].replace('/', '')
                if ability['slot'] == 'Grenade':
                    file += '-1'
                elif ability['slot'] == 'Ability1':
                    file += '-2'
                elif ability['slot'] == 'Ability2':
                    file += '-3'
                elif ability['slot'] == 'Ultimate':
                    file += '-4'
                else:
                    continue
                download_asset('displayIcon', cur_path, ability, file)
    else:
        print(agents.status_code)

def gear_request(url, icon):
    gear_list = requests.get(url).json()['data']
    if gear_list:
        gear_path = os.path.join(os.curdir, 'gear')
        make_path(gear_path)
        for gear in gear_list:
            download_asset(icon, gear_path, gear, gear['displayName'])
    else:
        print(gear_list.status_code)

if __name__ == '__main__':
    AGENTS_URL = 'https://valorant-api.com/v1/agents'
    GEAR_URL = 'https://valorant-api.com/v1/gear'
    WEAPONS_URL = 'https://valorant-api.com/v1/weapons'
    agent_request()
    gear_request(WEAPONS_URL, 'killStreamIcon')
    gear_request(GEAR_URL, 'displayIcon')