<template>
  <section class="account__section">
    <div class="container mx-auto px-5">
      <CommonHeader title="마음 전하실 곳" subtitle="ACCOUNT" />
      <p class="notify__text">
        참석이 어려우신 분들을 위해 <br />계좌번호를 기재하였습니다. <br />너그러운 마음으로 양해
        부탁드립니다.
      </p>

      <AccountAccordion>
        <template #header>신랑측 계좌번호</template>
        <template #content>
          <div class="account__group" v-for="(item, i) of accountArray[0]" :key="i">
            <div class="flex items-center justify-between">
              <p>{{ item.accountBank }} {{ item.accountNumber }}</p>
              <BaseButton variant="gray" size="xs" medium @click="handleCopy(item.accountNumber)"
                ><template #icon><img src="/static/images/button_icon_copy.svg" /></template
                >복사</BaseButton
              >
            </div>
            <div class="flex items-center justify-between mt-[6px]">
              <p>{{ item.accountHolder }}</p>
              <BaseButton tagType="a" :href="item.kakaoLink" variant="kakao" size="xs" medium
                ><template #icon><img src="/static/images/button_icon_kakaopay.svg" /></template
              ></BaseButton>
            </div>
          </div>
        </template>
      </AccountAccordion>

      <AccountAccordion class="mt-3">
        <template #header>신부측 계좌번호</template>
        <template #content>
          <div class="account__group" v-for="(item, i) of accountArray[1]" :key="i">
            <div class="flex items-center justify-between">
              <p>{{ item.accountBank }} {{ item.accountNumber }}</p>
              <BaseButton variant="gray" size="xs" medium @click="handleCopy(item.accountNumber)"
                ><template #icon><img src="/static/images/button_icon_copy.svg" /></template
                >복사</BaseButton
              >
            </div>
            <div class="flex items-center justify-between mt-[6px]">
              <p>{{ item.accountHolder }}</p>
              <BaseButton tagType="a" :href="item.kakaoLink" variant="kakao" size="xs" medium
                ><template #icon><img src="/static/images/button_icon_kakaopay.svg" /></template
              ></BaseButton>
            </div>
          </div>
        </template>
      </AccountAccordion>
    </div>
  </section>
</template>

<script>
import CommonHeader from '@/components/CommonHeader.vue';
import AccountAccordion from '@/components/AccountAccordion.vue';
import { ref, onMounted } from 'vue';
import { openAlert } from '@/plugins/alertPlugin';

export default {
  components: {
    CommonHeader,
    AccountAccordion,
  },
  setup() {
    const accountArray = [
      [
        {
          accountBank: '하나은행',
          accountNumber: '646-300142-00108',
          accountHolder: '신랑 아버지 박선영',
          kakaoLink: 'https://link.kakaopay.com/_/UPVaAoE',
        },
        {
          accountBank: '하나은행',
          accountNumber: '661-910087-04307',
          accountHolder: '신랑 어머니 김창순',
          kakaoLink: 'https://link.kakaopay.com/_/UPVaAoE',
        },
        {
          accountBank: '국민은행',
          accountNumber: '542302-04-131543',
          accountHolder: '신랑 박수현',
          kakaoLink: 'https://link.kakaopay.com/_/UPVaAoE',
        },
      ],
      [
        {
          accountBank: '하나은행',
          accountNumber: '123-456789-0000',
          accountHolder: '신부 아버지 정운천',
          kakaoLink: 'https://link.kakaopay.com/_/UPVaAoE',
        },
        {
          accountBank: '하나은행',
          accountNumber: '123-456789-0000',
          accountHolder: '신부 어머니 신수경',
          kakaoLink: 'https://link.kakaopay.com/_/UPVaAoE',
        },
        {
          accountBank: '하나은행',
          accountNumber: '123-456789-0000',
          accountHolder: '신부 정예솔',
          kakaoLink: 'https://link.kakaopay.com/_/UPVaAoE',
        },
      ],
    ];

    const handleCopy = (accountNumber) => {
      navigator.clipboard.writeText(accountNumber).then(() => {
        openAlert({
          title: '복사 완료',
          message: '계좌번호가 복사되었습니다.',
        });
      });
    };

    return { accountArray, handleCopy };
  },
};
</script>

<style lang="scss" scoped>
.account__section {
  padding-bottom: 80px;

  .notify__text {
    font-size: 15px;
    color: #666;
    line-height: 1.53;
    text-align: center;
    margin-bottom: 24px;
  }

  .account__group {
    padding: 16px 24px;

    & + .account__group {
      border-top: 1px dashed #e9e9e9;
    }

    p {
      font-size: 13px;
      color: #666;
    }

    .button {
      width: 58px;
    }
  }
}
</style>
