import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import MovieDetails from '@/components/MovieDetails';
import TicketSelection from '@/components/TicketSelection';
import SeatSelection from '@/components/SeatSelection';
import Confirmation from '@/components/Confirmation';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/movie/:id', component: MovieDetails },
    { path: '/movie/:id/tickets', component: TicketSelection },
    { path: '/movie/:id/seat-selection', component: SeatSelection },
    { path: '/confirmation', component: Confirmation },
  ],
  mode: 'history',
});
