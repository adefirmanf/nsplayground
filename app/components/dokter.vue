<template>
    <Page>
        <ActionBar :title="dokter.name">
            <NavigationButton android.systemIcon="ic_menu_back"
                @tap=$navigateBack />
        </ActionBar>
        <StackLayout class="p-20">
            <Image src="~/images/doctor-list.jpg" width="100" height="100" stretch="none" />
            <Label :text="dokter.name" class="h2 text-center" />
            <Label :text="dokter.praktek" />
            <Label :text="dokter.maks" />
            <Label textWrap="true">
                <FormattedString>
                    <Span text="Pasien yang sudah antri :" />
                    <Span :text="dokter.pasien.length" />
                </FormattedString>
            </Label>
            <Button class="button1" text="Daftar" @tap="onButtonTap" row="0"
                col="0" />
        </StackLayout>
    </Page>
</template>

<script>
    export default {
        props: ["dokter"],
        data() {
            return {};
        }
    };
</script>

<style>
</style>