# scripts/generate_badge.py
import discord
import asyncio
import os
from PIL import Image, ImageDraw, ImageFont
import requests

async def get_guild_count():
    """Discord botの参加サーバー数を取得"""
    intents = discord.Intents.default()
    client = discord.Client(intents=intents)
    
    @client.event
    async def on_ready():
        guild_count = len(client.guilds)
        print(f"Guild count: {guild_count}")
        
        # バッジを生成
        generate_badge(guild_count)
        
        await client.close()
    
    await client.start(os.environ['DISCORD_BOT_TOKEN'])

def generate_badge(server_count):
    """Shields.io APIを使用してバッジ画像を生成"""
    label = "PLANA in servers"
    message = str(server_count)
    color = "purple"
    
    # Shields.io の静的バッジAPIを使用
    url = f"https://img.shields.io/badge/{label}-{message}-{color}"
    
    print(f"Generating badge from: {url}")
    response = requests.get(url)
    
    if response.status_code == 200:
        # assetsディレクトリが存在しない場合は作成
        assets_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'assets')
        os.makedirs(assets_dir, exist_ok=True)
        
        # バッジを保存
        badge_path = os.path.join(assets_dir, 'badge.svg')
        with open(badge_path, 'wb') as f:
            f.write(response.content)
        print(f"✓ Badge generated successfully: {server_count} servers")
        print(f"✓ Saved to: {badge_path}")
    else:
        print(f"✗ Failed to generate badge: {response.status_code}")
        raise Exception(f"Badge generation failed with status {response.status_code}")

def main():
    """メイン処理"""
    # 環境変数チェック
    if 'DISCORD_BOT_TOKEN' not in os.environ:
        raise ValueError("DISCORD_BOT_TOKEN environment variable is not set")
    
    print("Starting badge generation...")
    asyncio.run(get_guild_count())
    print("Badge generation completed!")

if __name__ == "__main__":
    main()