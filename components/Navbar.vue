<template>
    <b-navbar toggleable="md" type="dark" variant="info" fixed="top">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
                <img src="~/assets/gdglogo.png" />
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
                <b-nav-item href="#">Quem Somos</b-nav-item>
                <b-nav-item href="#">Eventos</b-nav-item>
                <b-nav-item href="#">Galeria</b-nav-item>
                <b-nav-item href="#">Notícias</b-nav-item>
                <b-nav-item href="#">Coordenação</b-nav-item>
                <b-nav-item href="#">Contato</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>