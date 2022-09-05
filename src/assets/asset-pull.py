import os

import requests

def make_path(path: str):
    if not os.path.exists(path):
        os.makedirs(path)

def download_asset(icon: str, path: str, group: dict, file_name=''):
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
                if agent['displayName'] == 'Astra' or ability['slot'] != 'Passive':
                    download_asset('displayIcon', cur_path, ability, ability['slot'])
    else:
        print(agents.status_code)

def generic_request(url, icon):
    item_list = requests.get(url).json()['data']
    item_category = url.rsplit('/', 1)[1]
    if item_list:
        item_path = os.path.join(os.curdir, item_category)
        make_path(item_path)
        for item in item_list:
            download_asset(icon, item_path, item, item['displayName'])
    else:
        print(item_list.status_code)
    
if __name__ == '__main__':
    AGENTS_URL = 'https://valorant-api.com/v1/agents'
    GEAR_URL = 'https://valorant-api.com/v1/gear'
    WEAPONS_URL = 'https://valorant-api.com/v1/weapons'
    MAPS_URL = 'https://valorant-api.com/v1/maps'
    # VERSION_URL = 'https://valorant-api.com/v1/version'
    agent_request()
    generic_request(WEAPONS_URL, 'killStreamIcon')
    generic_request(GEAR_URL, 'displayIcon')
    generic_request(MAPS_URL, 'splash')
    
