'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8720c79fc3550edaf4cbbec524550acb",
"assets/AssetManifest.bin.json": "d4f8910872b4e0defefcdf7cf1380ee0",
"assets/AssetManifest.json": "c5628da528c711ab633b453b9ec21892",
"assets/assets/auth/envelope-open-text.png": "d780881e82ddba88c4742e540593c30a",
"assets/assets/contactus/support.png": "b664c74ec971c473074862af8f5acac5",
"assets/assets/editProfile/avatar1.png": "af9644cd2a652fe93f9293639391325a",
"assets/assets/editProfile/avatar2.png": "9aec31b28ae89c9f491d959c100c2419",
"assets/assets/editProfile/avatar3.png": "bb5032f4d5e3faf21168d7f4bacc99e8",
"assets/assets/editProfile/avatar4.png": "21af32a6ca4546598d9edb5a07b836df",
"assets/assets/editProfile/avatar5.png": "7e9d3a3b2d772e3b4066849b61bc372a",
"assets/assets/editProfile/avatar6.png": "3a9a6143b3cc84572a9ef95597c903a1",
"assets/assets/editProfile/avatar7.png": "044907ccc69d17e8166049579db6a13c",
"assets/assets/editProfile/avatar8.png": "19dde43f2bd4449f27254d644f661173",
"assets/assets/geographic/allemagne.png": "a201351a038ec9fb3a0d7f48a12fc86e",
"assets/assets/geographic/angleterre.png": "ca30465fad1b3e5ed87ce30b9cb1af01",
"assets/assets/geographic/arabie_saoudite.png": "dbfb26640358158fa658f6a742a4be46",
"assets/assets/geographic/australie.png": "529932a05fc8129a178db14dba1ea8fc",
"assets/assets/geographic/belgique.png": "7de65509095627ce86ebcf76c97ebb05",
"assets/assets/geographic/bresil.png": "55868b615eb419fee497c1c2686ba5b7",
"assets/assets/geographic/canada.png": "8dd4f95e2715b8cb762f71e9a1169593",
"assets/assets/geographic/chine.png": "7bae4c82685851bd83715dd7b778c14c",
"assets/assets/geographic/coree_du_sud.png": "a3bbdb1ef9a88456dc266f31c12ce055",
"assets/assets/geographic/danemark.png": "94a5b8e3d94897a52cdaa5bcdfa9a9d1",
"assets/assets/geographic/emirats_arabes_unis.png": "38cec0f2d24c7f133e6ba87907a605ba",
"assets/assets/geographic/espagne.png": "d17814e48da8959a7f495166f591b872",
"assets/assets/geographic/etats_unis.png": "2b1fd79b84284387d7e81e6c717b0deb",
"assets/assets/geographic/france.png": "727d3382d15169f4bbe0e5231f89cc45",
"assets/assets/geographic/grece.png": "32b4ea6ebe144410f85322272c882432",
"assets/assets/geographic/inde.png": "645545e2ea297f2efe8d80320c3e5cd8",
"assets/assets/geographic/irlande.png": "d1c37d041b12985fb3cacfb5487c857b",
"assets/assets/geographic/italie.png": "ba2ec1374ca2bc91c848db8f19611b6c",
"assets/assets/geographic/japon.png": "f24d35b8ff473f9293bb0b802849908a",
"assets/assets/geographic/malaisie.png": "93c57452214308ddb7d991d340439225",
"assets/assets/geographic/maroc.png": "062fd4e8a0a3a4e31dde72d91d60ad64",
"assets/assets/geographic/norvege.png": "b56887fb9f834765e450bcbce69d9e34",
"assets/assets/geographic/pays_bas.png": "880043fa8e4743046d70e6bbdf5b1fc0",
"assets/assets/geographic/portugal.png": "35311f0c60007236977650cee2dcfb63",
"assets/assets/geographic/suisse.png": "ed1aecd7a1e1cb9f3fd943b820e58364",
"assets/assets/geographic/turquie.png": "3f8990a77a3ed95f63206f928a4abb86",
"assets/assets/geographic/uruguay.png": "55926a5a98bda4f58e1c53789f4e2285",
"assets/assets/groupQuizResult/crown.png": "1ef4f6ae1134c743ef277b36f91a441d",
"assets/assets/groupQuizResult/Vector1.png": "ee7e0b7df52a35ffda1d6b2620835369",
"assets/assets/groupQuizResult/Vector2.png": "2e743808eaa43e477f19167c0f97c76d",
"assets/assets/groupQuizResult/VS1.png": "e2245842c3afe99aff29666a5748eb79",
"assets/assets/groupQuizResult/VS2.png": "d86f647b805979ea58863ed0dd13fb71",
"assets/assets/groupQuizResult/VS3.png": "bde307354b6f82a16678f90cf0f158b9",
"assets/assets/home/bannerBoys.png": "cceaed036bb7cf20f671b23b6899cf04",
"assets/assets/home/bannerGirls.png": "74b44cfcdc6b8accf83c97c7018a2fb9",
"assets/assets/home/bannerimage.png": "43967e7ebf350f03412e4218740334de",
"assets/assets/home/biology.png": "7933bc42804445d87b93364ba4fcf723",
"assets/assets/home/integers.png": "eac3d845591d21d0aaddd8de6a5629b2",
"assets/assets/home/maths.png": "a26ef033050aaf7b8a610262ee811881",
"assets/assets/home/MemojiGirls.png": "c724a7278e0a85ffed3d437eb7087646",
"assets/assets/home/music.png": "5066ec5b6b1fca03ebbafa9874d70948",
"assets/assets/home/networking.png": "5d6586f2443bdd08a17c4ab01c0a46d6",
"assets/assets/home/new_logo.png": "711fe4bcc4736ca9a5cb2c1fdabafb1d",
"assets/assets/home/new_logo_title.png": "f20effdbea687b0e96746947533ac1a9",
"assets/assets/home/online-friends.png": "2550b0c598269d6ef5abf15d6c738ba6",
"assets/assets/home/Search_alt_fill.png": "646e9951a2a372edced6832797948069",
"assets/assets/home/solarSystem.png": "040b4c50ac75022abd7772b62c615440",
"assets/assets/home/sport.png": "91f3774dc44386cefcd23386c2e62d51",
"assets/assets/home/technology.png": "413bdf27458bc8bcd9a024e9ccc7e13a",
"assets/assets/home/world.png": "3000c0d28791063bc0479bb39657d4e6",
"assets/assets/icon.png": "81c2e7d7299712ee1dbee0ab6a0ea2fb",
"assets/assets/joinQuiz/memojiGirls.png": "03ddf6d21a41ff878ce5829ea95ea554",
"assets/assets/leaderboard/crown.png": "c69412605b196c3b9ef16d787df24cf1",
"assets/assets/leaderboard/image1.png": "17da687fead32f8c9dd07912583d73a8",
"assets/assets/leaderboard/image2.png": "e8ad0431199bacdeb3b50218512fb0da",
"assets/assets/leaderboard/image3.png": "8fd8448a3034e5a3bd9ff78cc9490aee",
"assets/assets/leaderboard/user1.png": "925824b62d516e22b530b8e94f3de1a0",
"assets/assets/leaderboard/user2.png": "1597cedc40a5e24bfd4fc4985dcf9901",
"assets/assets/leaderboard/user3.png": "8aceb7a1825df9c9599d6092d6e49785",
"assets/assets/leaderboard/user4.png": "dbf3c84c96f92935e7c0cb51a23ca949",
"assets/assets/leaderboard/Vector1.png": "8a5fd87d7910ee815f42823f464e2147",
"assets/assets/leaderboard/Vector2.png": "0793c0ae5d810837201e1029b40e960a",
"assets/assets/leaderboard/Vector3.png": "38f688d7f5c8689f44a041c8a259beb7",
"assets/assets/music/abdelazar_purcell.mp3": "1376ca51993a677243a56c468a5f93f5",
"assets/assets/music/adagio_albinoni.mp3": "d52299630d408eacbd9a2aed5cc10fad",
"assets/assets/music/aida_marche_triomphale_verdi.mp3": "ba4ca6f0347237886167fcf86a46d3d2",
"assets/assets/music/air_pour_madame_la_dauphone_lully.mp3": "f52dc5741c199c28c9632ac09b1991a7",
"assets/assets/music/alleluia_haendel.mp3": "03365eec98f4317fbe9fff84ef106708",
"assets/assets/music/arabesque_1_debussy.mp3": "183c3444c4d4e1003ceee92d68806d51",
"assets/assets/music/arabesque_2_debussy.mp3": "a38971cbe2fae6b92b8e69035e0d7d05",
"assets/assets/music/arlesienne_bizet.mp3": "f180f0a2a2327895e1faeb231a5bc060",
"assets/assets/music/asturias_albeniz.mp3": "33ebd6348a8d7c1c9e14f9f3f38d1f2a",
"assets/assets/music/automne_1_vivaldi.mp3": "d4c5e088f826bd61a129ad4cc66b9247",
"assets/assets/music/automne_2_vivladi.mp3": "ce1f16c5719f75802975cec2cb7f4d11",
"assets/assets/music/automne_3_vivladi.mp3": "ca7c58dcd43f0aea62736cb7cce71cc9",
"assets/assets/music/ave_maria_gounod.mp3": "36a2c2afcd9cfbc0e78a5fb2d972727e",
"assets/assets/music/ave_maria_schubert.mp3": "5364d79adac10fb02d7090a1b1c1c614",
"assets/assets/music/ave_verum_corpus_mozart.mp3": "4606bb53b86cf8284f3b4d6afb595baf",
"assets/assets/music/badinerie_bach.mp3": "4832101f697a7515e18dfb1857d26c2e",
"assets/assets/music/barbier_de_seville_rossini.mp3": "f108589d35d6a2b8411489e1f47788ad",
"assets/assets/music/berceaux_faure.mp3": "f3ee7ee5c25a6dd4a7a82bd498af83ca",
"assets/assets/music/bolero_ravel.mp3": "cf2d9dacedb0fefe6c34063ba98de52b",
"assets/assets/music/brandebourg_bach.mp3": "36f5693b1f90f9422169e6d7982489c6",
"assets/assets/music/canon_pachelbel.mp3": "c28b1fd295e6ccd83fce6f004a0cc53f",
"assets/assets/music/cantique_jean_racine_faure.mp3": "04ed3e6ea7219a02274e311059ad5d5b",
"assets/assets/music/can_can_offenbach.mp3": "e46fc5ddf092b1eb84106c1f502605f6",
"assets/assets/music/caprice_paganini.mp3": "84070831f91a951762a04b9c035d4f3c",
"assets/assets/music/carmen_dragon_biezt.mp3": "b80e8062ff74856b3abccc59f4165e21",
"assets/assets/music/carmen_habanera_bizet.mp3": "93e12dc676375194a668076ffae8a1f0",
"assets/assets/music/carmen_ouverture_bizet.mp3": "8709fcc28265037c22913a77113a10ee",
"assets/assets/music/carmen_seguidillas_bizet.mp3": "10c692ad61697953629faa7c50436e9d",
"assets/assets/music/carmen_viva_biezt.mp3": "8e751aa9d91e80e475d4b616efbcf058",
"assets/assets/music/carmina_burana_orff.mp3": "e7b43187b277f2c12b5c109ad2dfd70f",
"assets/assets/music/casse_noisiette_tchaikovski.mp3": "c7f7ccd0d006e6f284d405d2b607c6e6",
"assets/assets/music/chevauche_des_walkiries_wagner.mp3": "192ee5448f0b4bbd1b1e5ccea3640e4e",
"assets/assets/music/claire_de_lune_debussy.mp3": "01c317ec94a58a5192c829d5f2ea1f60",
"assets/assets/music/concerto_aranjuez_rodrigo.mp3": "eab95224334ae109c51e37ad472cea7c",
"assets/assets/music/concerto_clarinette_2_mozart.mp3": "1d87e229d2e6485da6af52be2b1fcdbd",
"assets/assets/music/concerto_cor_mozart.mp3": "424b211580f3dec5bc22abe34487bd97",
"assets/assets/music/concerto_mandoline_2_vivaldi.mp3": "3c473f2841f20bd7e96c31df4e0d4c85",
"assets/assets/music/concerto_mandoline_vivaldi.mp3": "3ed02486029cf927635d9b5f4795aea6",
"assets/assets/music/concerto_pour_piano_mozart.mp3": "69b30d30638a17d70911aaea37f5ec5e",
"assets/assets/music/concerto_pour_trompette_haydn.mp3": "a567f99f358918c24bc7180db434f0d2",
"assets/assets/music/concerto_violon_beethoven.mp3": "0e3de03772a3e2911cf66a1dbd544dc4",
"assets/assets/music/concerto_violon_paganini.mp3": "ba097bff9b5e84b31f85ee961baa961a",
"assets/assets/music/concert_violon_3_3_mozart.mp3": "2114610ebf01b2eb923bc3dadba8107c",
"assets/assets/music/conerto_basson_vivaldi.mp3": "c28b94e2197027d0833bf0ae2c8e4024",
"assets/assets/music/conerto_piano_grieg.mp3": "535780e7f26b4b77be6c2d07957bba7e",
"assets/assets/music/contes_offmann_hoffenbach.mp3": "2654f64440801bdb81a0672aa23413c3",
"assets/assets/music/cosi_fan_tutte_mozart.mp3": "b9f4d4b0e18a0b65ff0a9008050bf546",
"assets/assets/music/czardas_monti.mp3": "0b999a49b7349590ec1deb1862e13084",
"assets/assets/music/damnation_de_faust_berlioz.mp3": "82532bb95154a30b2a01101d33ea0091",
"assets/assets/music/danse_du_sabre_katchatourian.mp3": "0b8914388a658f5a745ad10e5a803ef0",
"assets/assets/music/danse_hongroise_1_brahms.mp3": "ac08af0d0d9515c65c1381ba512ece55",
"assets/assets/music/danse_hongroise_5_brahms.mp3": "3efb9a29bb36d92d9b92efb473942fa1",
"assets/assets/music/danse_macabre_saint_seans.mp3": "5f86bb02bd3bb8c88b2733b785fcf144",
"assets/assets/music/danude_bleu_strauss.mp3": "d28f9eae34720a67cac96db8406e13c6",
"assets/assets/music/don_giovanni_mozart.mp3": "9f0c2da1611a3d7554c227c6abe998fa",
"assets/assets/music/duo_des_fleurs_delibes.mp3": "090fcd1314109c2266a203b1a21e492c",
"assets/assets/music/elise_beethoven.mp3": "382e14e75f64c51ab7ffcc54ef6e2477",
"assets/assets/music/elixir_d_amour_donizetti.mp3": "8341219df9d503856e942026bdfeea50",
"assets/assets/music/ete_1_vivaldi.mp3": "a47ce872aa9929e6071627562f3d2dde",
"assets/assets/music/ete_2_vivladi.mp3": "7903f272743004e5d7268da96d934a89",
"assets/assets/music/ete_3_vivaldi.mp3": "efbf77cb3957dd0e17b0606eef35d771",
"assets/assets/music/feuerwerksmusik_haendel.mp3": "0103fcfed125df53b34e797a3e53cddf",
"assets/assets/music/follia_2_corelli.mp3": "a793fc1c098a271ee713d08b8f3aa0c3",
"assets/assets/music/follia_3_corelli.mp3": "644fd3e63f3761d7215538fa614c0a88",
"assets/assets/music/follia_corelli.mp3": "424acee831aa88b7727278dd64308e74",
"assets/assets/music/gloria_1_vivaldi.mp3": "3af32b6c441f98f061f1c193d55b3495",
"assets/assets/music/guillaume_tell_rossini.mp3": "7bb5f0dcfcdd29824ad4511b276e937d",
"assets/assets/music/gymnopedie_satie.mp3": "221618e72dea790b889bcd9fbba9e73c",
"assets/assets/music/hiver_1_vivaldi.mp3": "2dd3fbb536765ec712f8bee6b3a4caa3",
"assets/assets/music/hiver_2_vivaldi.mp3": "16e3a37c95fd2103db8252b2ce1e9d07",
"assets/assets/music/hiver_3_vivaldi.mp3": "29b37f126acc3bd74664a0be5cdbc928",
"assets/assets/music/invitation_chateau_poulenc.mp3": "aa3e1dfd0719d4d08b869d0afde96d4c",
"assets/assets/music/italienne_a_alger_rossini.mp3": "433f3152f4e31d4d5a8b84d95649e3c6",
"assets/assets/music/kv_265_mozart.mp3": "5e8d4bb0194bff38e94ab7c4d2a6ff42",
"assets/assets/music/kv_310_mozart.mp3": "bbbc16a2d50a2bb4e6f4bd4041165dd4",
"assets/assets/music/kv_545_1_mozart.mp3": "b63691abfa4f7f4a31e6346f48215640",
"assets/assets/music/kv_545_2_mozart.mp3": "dacf085644896f12b7fe526f7d7f2e05",
"assets/assets/music/lac_des_cygnes_tchaikovski.mp3": "3d26fd25bdeb13ac94df8b471cafdef5",
"assets/assets/music/land_of_hope_and_glory_elgar.mp3": "74412d0128baa0990c0a740a31e6ed7f",
"assets/assets/music/la_donna_mobile_rigoletto_verdi.mp3": "c629032ad24f174f3ab7112a86b44b6b",
"assets/assets/music/la_flute_enchante_1_mozart.mp3": "d99c19a2bb6fa11eac53fddea0652137",
"assets/assets/music/la_flute_enchante_2_mozart.mp3": "d2fd80ca6f9ba89a0c353d7a3c8464fd",
"assets/assets/music/la_marseillaise_berlioz.mp3": "60b8f8519da0b84cd4fe8b9f44e28df7",
"assets/assets/music/la_truite_schubert.mp3": "aee7b3e64e092e97f1ea1e5554dbeb1b",
"assets/assets/music/les_indes_galantes_forets_paisibles_rameau.mp3": "4b04d4d1db103d7ff5d6422117018c07",
"assets/assets/music/le_carnaval_des_animaux_aquarium_saint_seans.mp3": "05d6692b701945ebeaff5f82656abe25",
"assets/assets/music/le_carnaval_des_animaux_cygne.mp3": "7ee43e35385bd982a640844780b7ed79",
"assets/assets/music/le_carnaval_des_animaux_elephant_saint_seans.mp3": "1fd58beb1031c4286ec7f4138a058ced",
"assets/assets/music/le_carnaval_des_animaux_lion_saint_seans.mp3": "96eb558f12792ab8b841d3bcc9098bca",
"assets/assets/music/le_sacre_du_printemps_stravinsky.mp3": "4e6870131c178426c6f08cf77f7c767b",
"assets/assets/music/le_trouvere_verdi.mp3": "b83f36ee64d32b0321103ab72d6e5cf4",
"assets/assets/music/libertango_piazzola.mp3": "40dca0535f66178101787a22a465afa1",
"assets/assets/music/loup_pierre_et_le_loup_prokofiev.mp3": "a807518d46e2f838ff3c12c3cccef56a",
"assets/assets/music/lullaby_brahms.mp3": "d1c52eed2bdf6e5631f50ff6c4fd1302",
"assets/assets/music/l_apprenti_sorcier_dukas.mp3": "1baaf33398272f41824eb12e7cbecdc5",
"assets/assets/music/l_egyptienne_rameau.mp3": "dcbea47eb066771d050be35bd2b7d7b7",
"assets/assets/music/l_orchestre_du_roi_lully.mp3": "dc60334c4d3018fa448d7d0f2cab1fbd",
"assets/assets/music/marche_de_ratezky_strauss.mp3": "1e81708f1088144bce0e632f9f21c106",
"assets/assets/music/marche_millitaire_schubert.mp3": "62dc482a38e854f4734298082406b288",
"assets/assets/music/marche_nuptial_mendelssohn.mp3": "5f19bce3a329c89184f529deaadba5cb",
"assets/assets/music/marche_turque_lully.mp3": "daf6ba38254f16a5a54ae40085ca92cc",
"assets/assets/music/marche_turque_mozart.mp3": "e2095e6b3504e1f3df5324f20470133b",
"assets/assets/music/menuet_boccherini.mp3": "14dafc2494a6f54eb75bbe7d4688e80c",
"assets/assets/music/moldau_smetana.mp3": "1b1bbbe55efd62ddd59e278598aec42b",
"assets/assets/music/nabucco_verdi.mp3": "385cdaccfff82b64a4ad684ccf0d0e8d",
"assets/assets/music/nessun_dorma_puccini.mp3": "ab87d3657529538d5bc985ace3ae17a2",
"assets/assets/music/nocturne_2_chopin.mp3": "f77d1b7369f31dd1e67b6f34295d7d69",
"assets/assets/music/nymphs_and_sheperds_purcell.mp3": "1823623bf652b335468ef2ded0b3108e",
"assets/assets/music/oblivion_piazzola.mp3": "2a86a414aaf8f7278db1a30d3cca863c",
"assets/assets/music/ouverture_pierre_et_le_loup_prokofiev.mp3": "d9c003a9edce729feae907deb8dd9527",
"assets/assets/music/pastoral_beethoven.mp3": "dd110ae4b37cbf4cbfe4b62e76adb817",
"assets/assets/music/pavane_faure.mp3": "0154f38924615d4f8d074f0d3c5125a9",
"assets/assets/music/pavane_pour_une_infante_defunt_ravel.mp3": "c4ae5377451547eb32cfeececa56ebdc",
"assets/assets/music/petite_messe_solennelle_rossini.mp3": "066fc1356be8616c892a3f9ff8a513f1",
"assets/assets/music/petite_musique_de_nuit_mozart.mp3": "d8cd4af2a64aa580a906279fddbeb044",
"assets/assets/music/pierre_pierre_et_le_loup_prokofiev.mp3": "96947e8abb8273a0f838d79e688ee6ee",
"assets/assets/music/prelude_al_apres_midi_d_un_faune_debussy.mp3": "752f2a4a64f0d06e2dddbf5f993b1b82",
"assets/assets/music/prelude_bach.mp3": "d8cb077d5bc91e7b71fe16409a685937",
"assets/assets/music/prelude_chopin.mp3": "41b03c2a3d2463ae8449c9c596dc2045",
"assets/assets/music/prelude_violoncelle_bach.mp3": "e6cb46a62bc56c94d3a9a257cb66220f",
"assets/assets/music/printemps_2_vivaldi.mp3": "f78a5a96679453ff85f8f7b5884733ff",
"assets/assets/music/printemps_3_vivaldi.mp3": "d1c8f88713522beee67929b6f2f8b630",
"assets/assets/music/printemps_un_vivaldi.mp3": "8ff0b825a5178ad5b34a6c46ffbb1f64",
"assets/assets/music/requiem_dies_irae_mozart.mp3": "6423a9d73a8d633fbe6376acff27c8f4",
"assets/assets/music/requiem_in_paradisum_faure.mp3": "91c7e35ef71e37572112a5056510afb4",
"assets/assets/music/requiem_lacrimosa_mozart.mp3": "1fe11f503de8b45d3489b5ffae596407",
"assets/assets/music/requiem_liberame_faure.mp3": "62b3cf10b6398baf2fd6ebd46cc080ba",
"assets/assets/music/requiem_pie_jesus_faure.mp3": "b1960612d705309b529199adda1dd9e9",
"assets/assets/music/requiem_verdi.mp3": "6bc80368d6d948d3d965e44483a2be66",
"assets/assets/music/reverie_schumann.mp3": "b1df44fe37592cf7f9ba1ef763996940",
"assets/assets/music/romeo_et_juliette_prokofiev.mp3": "b9a9f14f0c0931ffd663d9dafeef7bdf",
"assets/assets/music/sarabande_haendel.mp3": "19363fe95444d9e76cf78034dabe6033",
"assets/assets/music/sonate_au_claire_de_lune_2_beethoven.mp3": "3318287e1d38bb4e75f226962b4e807b",
"assets/assets/music/sonate_au_claire_de_lune_beethoven.mp3": "21e03b56265b3bda208a7c6ce2829b80",
"assets/assets/music/sonate_au_clair_de_lune_3_beethoven.mp3": "b253c73b879efe96908262937463154c",
"assets/assets/music/sonate_clementi.mp3": "de9780987ee18c2e0e2c0488c7ce88fe",
"assets/assets/music/stabat_mater_pergolese.mp3": "65c2abbd0d72d7f71db07a7fc46ee47d",
"assets/assets/music/standchen_schubert.mp3": "cabf0195a927c4c679d1793547ddc233",
"assets/assets/music/symphonie_25_mozart.mp3": "a3ee537e7cdf942317314304e447d230",
"assets/assets/music/symphonie_40_mozart.mp3": "22b17b1a191b25298ad86754e619e5ad",
"assets/assets/music/symphonie_5_beethoven.mp3": "824e1c613ac04f9e77ffd789d2855812",
"assets/assets/music/symphonie_7_2_beethoven.mp3": "cbf266388f8ee78469df3e2c53802ae2",
"assets/assets/music/symphonie_7_3_beethoven.mp3": "58914e3986e878c30cd115d3cd806700",
"assets/assets/music/symphonie_9_beethoven.mp3": "140e72d10ea2fd759a6a42f5d1542eee",
"assets/assets/music/symphonie_fantastique_berlioz.mp3": "4c499ebda3e47e2c573e2855f4065a4a",
"assets/assets/music/symphonie_inachevee_schubert.mp3": "8679f3fb912c3e8cd3c3a3647c55fe4c",
"assets/assets/music/symphonie_nouveau_monde_dvorak.mp3": "3a7078677d014b18877149bcf3da27f0",
"assets/assets/music/te_deum_charpentier.mp3": "e2bc3677ecf7f341442ca2ee1ad4fb86",
"assets/assets/music/thais_massenet.mp3": "8763b9f9e39ddcd3a47654c82245f69c",
"assets/assets/music/tocata_fugue_bach.mp3": "573e03249d7c10ab2911d503795d0058",
"assets/assets/music/traviata_2_verdi.mp3": "b6f29df55b432f8ad2672b7572e6dbba",
"assets/assets/music/traviata_verdi.mp3": "6ec7c735629e9b386bd8ddd1a7bd3bc9",
"assets/assets/music/valse_19_chopin.mp3": "226892f3df21f6e624c7f0d7c8a2acdf",
"assets/assets/music/valse_1_op_64_chopin.mp3": "d289b32669ac067b8440d166cb8a9e0f",
"assets/assets/music/valse_2_op_64_chopin.mp3": "3bddc72b8eeab243bc1d58dd3c60ee35",
"assets/assets/music/valse_2_tchostakovich.mp3": "e01b3fd5843cdf171a04dc7c1fb96db8",
"assets/assets/music/valse_des_fleurs_tchaikovsky.mp3": "b6acc438c5c1d2351f2377a6c197f6f6",
"assets/assets/music/valse_favorite_mozart.mp3": "641163705f8bbc029bcfe8e0121608f8",
"assets/assets/music/vocalise_rakmaninov.mp3": "d146e91c8dcd9f56ea068168f33b90a7",
"assets/assets/music/voi_che_sapete_mozart.mp3": "113286ceab52f62e4a114e16144b0aa0",
"assets/assets/music/vol_du_bourdon_korsakov.mp3": "33211fd625ee02616d2c34955724b7cf",
"assets/assets/music/water_music_haendel.mp3": "6b009b3429c0624ecda72a5b4d588740",
"assets/assets/new_icon.png": "711fe4bcc4736ca9a5cb2c1fdabafb1d",
"assets/assets/onboarding/new_onboarding1.png": "d6e52a49abcfdd699ba7228c0e1b3e39",
"assets/assets/onboarding/new_onboarding2.png": "1f07b8910d7b0fc07893820b6abb3620",
"assets/assets/onboarding/new_onboarding3.png": "a8636f8137709326a5166fb6ee37677d",
"assets/assets/onboarding/onboarding1.png": "22fdb70919760624611f32b88a7b36ba",
"assets/assets/onboarding/onboarding2.png": "470cf610e8fce9aacdf6c6a5f5c0b63c",
"assets/assets/onboarding/onboarding3.png": "f4ba5809bb086bd2f6936d2f89e48a13",
"assets/assets/profile/avatar3.png": "0a1822bcd138aa265ae9a554f4b846e7",
"assets/assets/profile/question.png": "7f415be3e2effe615510f0dae0f6a4c5",
"assets/assets/profile/Star.png": "0dfa5ffb9bc02f231dea06c507cdffd1",
"assets/assets/profile/verified.png": "3dbf533f719817a3caa4637ea0cff97b",
"assets/assets/profile/world.png": "1a4eb904839cd5c0302a711b090a9026",
"assets/assets/quizResult/done.png": "215cfe9d2856c03e8e9f2610e495c210",
"assets/assets/randomUser/user1.png": "050df3b9f854b72d59536ec442444857",
"assets/assets/randomUser/user2.png": "53b7408ade622aa6d5320e3cbe57a359",
"assets/assets/randomUser/VS.png": "f22e765b6c758575b280182f18dbc9f4",
"assets/assets/referFriend/Christmas%2520giveaway.png": "043ddfc5ae05a646c9ecec91a93b04f6",
"assets/assets/referFriend/facebook-3%2520logo.png": "5141a6fd6eb0126f01af67cb0387e6d9",
"assets/assets/referFriend/gmail%2520logo.png": "45b7705a62362b3e386b8d75d44f2851",
"assets/assets/referFriend/instagram-2-1%2520logo.png": "026e15c87f5e543b95a3a23dcc63ddfe",
"assets/assets/referFriend/snapchat%2520logo.png": "2b7cbb0f261f2ea7e0ad21d39424d088",
"assets/assets/referFriend/twitter-3%2520logo.png": "6121d4df9d51a4c0d3affbe67c7f071b",
"assets/assets/referFriend/WhatsApp%2520logo.png": "d286f8f71467f23ebb791d1fabc92e75",
"assets/assets/selectFriend/friend1.png": "1d2ccab0c6afe262982471a2f56b36cc",
"assets/assets/selectFriend/friend2.png": "837ea3bbd888b96844e71e6a212722fa",
"assets/assets/selectFriend/friend3.png": "ea588e833e2331e97ab2d83b18a4c1c2",
"assets/assets/selectFriend/friend4.png": "b244b3ce86645099f4a29d9f3c8604f8",
"assets/assets/selectFriend/friend5.png": "05ff59549919b649afb9e50ea1d13dc4",
"assets/assets/selectFriend/friend6.png": "fccddf0ae74b83f81d81e998690af009",
"assets/assets/selectFriend/friend7.png": "eac553f2ae48b2c15f5288efc82b4e81",
"assets/assets/selectFriend/friend8.png": "b925c0a7ac8af416e0df3a6017c85150",
"assets/assets/selectFriend/friend9.png": "22c3a3226a2d4cf6a85e08d28cecb052",
"assets/assets/spalsh/Logo.png": "aa72c3ffcf36ec51eea04b00324a371b",
"assets/assets/spalsh/new_logo.png": "711fe4bcc4736ca9a5cb2c1fdabafb1d",
"assets/FontManifest.json": "816ce46bcd378bcc0c65a6334995e3a8",
"assets/fonts/BebasNeue-Regular.ttf": "b2b293064f557c41411aac04d6f6710d",
"assets/fonts/MaterialIcons-Regular.otf": "a11f63b631d8791ea9cc01e7afbc0c8d",
"assets/fonts/NunitoSans-Black.ttf": "1f8f5740309e62a563b8a5c9d59ece3b",
"assets/fonts/NunitoSans-Bold.ttf": "ac72fe0f27dd514aa3215e8424842062",
"assets/fonts/NunitoSans-ExtraBold.ttf": "1d86790a12f81cc60ab837c979bab63d",
"assets/fonts/NunitoSans-Regular.ttf": "4dac705158fb1ca226d583b3829f82a0",
"assets/fonts/NunitoSans-SemiBold.ttf": "2836528ad13278d88bcc509dc3f8102b",
"assets/NOTICES": "01a35860729f6b9e18f3b8bf1a7f9f9b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5143d7ff91743103d834e4dc52c3ca64",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "171c41ee7cf9f28129e043cc0bf84524",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "392050f9f4c7dcc70239caddc7f3eb79",
"assets/packages/im_animations/assets/avatars/man.png": "6cb616c880ca291582ab569d443f9cc6",
"assets/packages/im_animations/assets/stamp.jpeg": "2e8629bcc63453ad8097a1e3a5226df0",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0bdf442337e70e16b9249167cf6eb9c6",
"/": "0bdf442337e70e16b9249167cf6eb9c6",
"main.dart.js": "6b84d3b0e289654c96411bda4a33cb38",
"manifest.json": "64f2f9a16b1ddf5401c6fac28d9fbae0",
"version.json": "66709593ed07f127cf7e4b0de9ffc144"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
