var langNames = { 'en': 'English', 'ja': '日本語 (Japanese)' };
var langList = ['ja']; // 'en' shouldn't be added here
var langResources = {
	'Twitter / user': ['Twitter / ユーザ'],
	'Twitter / tweet': ['Twitter / ツイート'],
	'Delete tweet': ['ツイートを削除'],
	'Retweet': ['リツイート'],
	'Quote with RT:': ['RT:を付けて引用'],
	'GeoTagging': ['ジオタグ'],
	'Location':	['場所'],
	'URL':	['URL'],
	'following':	['人をフォロー'],
	'followers':	['人がフォロー'],
	'tweets':	['ツイート'],
	'favs':	['fav'],
	'Follow $1':	['$1をフォロー'],
	'Remove $1':	['$1をリムーブ'],
	'$1 is following you!':	['$1はあなたをフォローしています!'],
	'show user info':	['ユーザ情報を表示'],
	'Log out':	['ログアウト'],
	'Preferences':	['設定'],
	'language':	['言語'],
	'max #msgs in TL':	['TLの最大表示数'],
	'#msgs in TL on update (max=200)':	['起動時のTL取得数(最大200)'],
	'#msgs in user on update (max=200)':	['ユーザTL取得数(最大200)'],
	'update interval':	['自動更新間隔'],
	'Update after post':	['発言後に自動更新'],
	'since_id check':	['TL取得時にsince_idを使用'],
	'Show not-following replies in TL':	['フォローしていない返信もTLに表示'],
	'Show retweets in "RT:" form':	['リツイートを"RT:〜"形式で表示'],
	'Auto-resize field':	['発言欄のサイズを自動調整'],
	'Post length counter':	['残り文字数を表示'],
	'Post with ctrl/shift+enter':	['ctrl+enter/shift+enterで発言'],
	'Enable GeoTagging':	['ジオタグ(位置情報)を有効に'],
	'Footer':	['フッター'],
	'Plugins':	['プラグイン'],
	'user stylesheet':	['ユーザスタイルシート'],
	'Twitter API status':	['Twitter APIの状態'],
	'hourly limit':	['1時間当たりの制限'],
	'reset at':	['リセット日時'],
	'This tweet is too long.': ['ツイートが長すぎます。'],
	'Your settings are saved. Please reload to apply plugins and CSS.': ['設定を保存しました。プラグイン、CSSの変更を反映するにはリロードが必要です。'],
	'Plugin error': ['プラグインのエラー'],
	'Are you sure to logout? You need to re-authenticate twicli at next launch.': ['ログアウトしてもよろしいですか? 次回起動時には再認証が必要になります。'],
	'Retweet to your followers?': ['あなたのフォロワーにこのツイートをRT(リツイート)してもよろしいですか?'],
	'This tweet is protected; Are you sure to retweet?': ['このツイートはプロテクトされています。本当にRTしますか?'],
	'Are you sure to delete this tweet?': ['このツイートを削除してもよろしいですか?'],
	'Are you sure to remove $1?': ['本当に $1 をリムーブしますか?'],
	'An external plugin is specified. This plugin can fully access to your account.\nAre you sure to load this?': ['外部プラグインが指定されています。このプラグインはあなたのアカウントに自由にアクセス可能になります。本当にロードしてもよろしいですか?']
};
