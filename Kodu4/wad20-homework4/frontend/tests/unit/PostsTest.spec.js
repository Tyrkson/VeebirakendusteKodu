import {mount, createLocalVue} from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Posts from "../../src/components/Posts.vue";
import moment from 'moment';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueRouter);

//Create dummy store
const store = new Vuex.Store({
    state: {
        user: {
            id: 1,
            firstname: 'test',
            lastname: 'test',
            email: 'test',
            avatar: 'test',
        }
    },
    getters: {
        user: (state) => state.user,
    }
});

//Create dummy routes
const routes = [
    {
        path: '/',
        name: 'posts',
    },
    {
        path: '/profiles',
        name: 'profiles'
    }
];

const router = new VueRouter({routes});

const testData = [
    {
        id: 1,
        text: "I think it's going to rain",
        createTime: "2020-12-05 13:53:23",
        likes: 0,
        liked: false,
        media: {
            url: "test-image.jpg",
            type: "image"
        },
        author: {
            id: 2,
            firstname: "Gordon",
            lastname: "Freeman",
            avatar: 'avatar.url'
        }
    },
    {
        id: 2,
        text: "Which weighs more, a pound of feathers or a pound of bricks?",
        createTime: "2020-12-05 13:53:23",
        likes: 1,
        liked: true,
        media: null,
        author: {
            id: 3,
            firstname: "Sarah",
            lastname: "Connor",
            avatar: 'avatar.url'
        }
    },
    {
        id: 4,
        text: null,
        createTime: "2020-12-05 13:53:23",
        likes: 3,
        liked: false,
        media: {
            url: "test-video.mp4",
            type: "video"
        },
        author: {
            id: 5,
            firstname: "Richard",
            lastname: "Stallman",
            avatar: 'avatar.url'
        }
    }
];

//Mock axios.get method that our Component calls in mounted event
jest.mock("axios", () => ({
    get: () => Promise.resolve({
        data: testData
    })
}));

describe('Posts', () => {

    const wrapper = mount(Posts, {router, store, localVue});

    it('1 == 1', function () {
        expect(true).toBe(true)
    });



    //TEST 1
    it('should render as many posts as there are in testData', () => {
        const items = wrapper.findAll('.post');
        expect(items.length).toEqual(testData.length);
    });

    //TEST 2
    it('should render image or video tags depending on media.type property', () => {
        const items = wrapper.findAll('.post');

        //for every post image
        for (var i = 0; i < items.length; i++) {

            //if the image/video does not exist
            if (testData[i].media == null) {
                expect(items.at(i).find('.post-image').exists()).toBeFalsy();            
            }

            //if the post is an image
            else if (testData[i].media.type == "image") {
                expect(items.at(i).find('.post-image img').exists()).toBeTruthy();
            }

            //if the post is a video
            else if (testData[i].media.type == "video") {
                expect(items.at(i).find('.post-image video').exists()).toBeTruthy();
            }

            
        }
    });


    //TEST 3
    it('should display the post create time in the correct format', () => {
        const items = wrapper.findAll('.post post-author small');
        for (var i = 0; i < items.length; i++) {
            expect(items.at(i)).toEqual(moment(items.at(i)).format('LLLL'));
        }
    });

});