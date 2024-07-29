const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
    test('create issue', function (done) {
        chai
          .request(server)
          .keepOpen()
          .post('/api/issues/apitest')
          .send({
            issue_title: "test",
            issue_text: "test-text",
            created_by: "test-creator"
          })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.type, 'application/json');
            assert.equal(res.body.issue_title, "test");
            done();
        });
    });

    test('create issue', function (done) {
        chai
          .request(server)
          .keepOpen()
          .post('/api/issues/apitest')
          .send({
            issue_title: "test",
            issue_text: "test-text",
            created_by: "test-creator"
          })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.type, 'application/json');
            assert.equal(res.body.issue_title, "test");
            done();
        });
    });

    test('create issue', function (done) {
        chai
          .request(server)
          .keepOpen()
          .post('/api/issues/apitest')
          .send({
            issue_title: "test",
            issue_text: "test-text",
            created_by: "test-creator"
          })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.type, 'application/json');
            assert.equal(res.body.issue_title, "test");
            done();
        });
    });

    test('create issue', function (done) {
        chai
          .request(server)
          .keepOpen()
          .post('/api/issues/apitest')
          .send({
            issue_title: "test",
            issue_text: "test-text",
            created_by: "test-creator"
          })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.type, 'application/json');
            assert.equal(res.body.issue_title, "test");
            done();
        });
    });

    test('create issue', function (done) {
        chai
          .request(server)
          .keepOpen()
          .post('/api/issues/apitest')
          .send({
            issue_title: "test",
            issue_text: "test-text",
            created_by: "test-creator"
          })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.type, 'application/json');
            assert.equal(res.body.issue_title, "test");
            done();
        });
    });

    test('create issue', function (done) {
        chai
          .request(server)
          .keepOpen()
          .post('/api/issues/apitest')
          .send({
            issue_title: "test",
            issue_text: "test-text",
            created_by: "test-creator"
          })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.type, 'application/json');
            assert.equal(res.body.issue_title, "test");
            done();
        });
    });

    test('create issue', function (done) {
        chai
          .request(server)
          .keepOpen()
          .post('/api/issues/apitest')
          .send({
            issue_title: "test",
            issue_text: "test-text",
            created_by: "test-creator"
          })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.type, 'application/json');
            assert.equal(res.body.issue_title, "test");
            done();
        });
    });

    test('create issue', function (done) {
        chai
          .request(server)
          .keepOpen()
          .post('/api/issues/apitest')
          .send({
            issue_title: "test",
            issue_text: "test-text",
            created_by: "test-creator"
          })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.type, 'application/json');
            assert.equal(res.body.issue_title, "test");
            done();
        });
    });

    test('create issue', function (done) {
        chai
          .request(server)
          .keepOpen()
          .post('/api/issues/apitest')
          .send({
            issue_title: "test",
            issue_text: "test-text",
            created_by: "test-creator"
          })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.type, 'application/json');
            assert.equal(res.body.issue_title, "test");
            done();
        });
    });

    test('create issue', function (done) {
        chai
          .request(server)
          .keepOpen()
          .post('/api/issues/apitest')
          .send({
            issue_title: "test",
            issue_text: "test-text",
            created_by: "test-creator"
          })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.type, 'application/json');
            assert.equal(res.body.issue_title, "test");
            done();
        });
    });

    test('create issue', function (done) {
        chai
          .request(server)
          .keepOpen()
          .post('/api/issues/apitest')
          .send({
            issue_title: "test",
            issue_text: "test-text",
            created_by: "test-creator"
          })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.type, 'application/json');
            assert.equal(res.body.issue_title, "test");
            done();
        });
    });

    test('create issue', function (done) {
        chai
          .request(server)
          .keepOpen()
          .post('/api/issues/apitest')
          .send({
            issue_title: "test",
            issue_text: "test-text",
            created_by: "test-creator"
          })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.type, 'application/json');
            assert.equal(res.body.issue_title, "test");
            done();
        });
    });

    test('create issue', function (done) {
        chai
          .request(server)
          .keepOpen()
          .post('/api/issues/apitest')
          .send({
            issue_title: "test",
            issue_text: "test-text",
            created_by: "test-creator"
          })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.type, 'application/json');
            assert.equal(res.body.issue_title, "test");
            done();
        });
    });

    test('create issue', function (done) {
        chai
          .request(server)
          .keepOpen()
          .post('/api/issues/apitest')
          .send({
            issue_title: "test",
            issue_text: "test-text",
            created_by: "test-creator"
          })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.type, 'application/json');
            assert.equal(res.body.issue_title, "test");
            done();
        });
    });
});
