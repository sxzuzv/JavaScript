const wish_fairy = {
    name: 'NCT WISH',
    debut_year: 2024,
    members: ['시온', '리쿠', '유우시', '재희', '료', '사쿠야'],
    spell: [
        '콩국수는 달게 먹어야지 🐰',
        '나의 인생처럼 쵼쵸니 🐹',
        '나를 믿고 정착하라 🐈',
        '오늘 하루도 수고했어 🌳',
        '이런 아저씨도 좋아할래? 🦭',
        '노래 없짜나요! 🥐'
    ],
    make_a_wish: async function (wish) {
        for (let i = 0; i < this.members.length; i++) {
            await new Promise((resolve) => {
                setTimeout(() => {
                    console.log('-----------------------------------------');
                    console.log(
                        `소원 요정 [ ${this.members[i]} ] 일하는 중..`
                    );
                    console.log(`[ ${this.members[i]} ] 이(가) 속삭이고 있어요!`);
                    console.log(`... ' ${this.spell[i]} '`);
                    console.log('-----------------------------------------');

                    resolve();
                }, 300 * i);
            });
        }

        return `🪽 당신의 소원 [ ${wish} ] 이(가) 이루어졌어요! 곧 좋은 일이 생길 거예요. 🪽`;
    }
}

const wish = '엔시티 위시 팬싸인회 당첨';
wish_fairy.make_a_wish(wish).then((resolve) => {
    console.log(resolve);
});