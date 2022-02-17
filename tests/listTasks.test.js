/* eslint-disable max-lines-per-function */
/* eslint-disable mocha/no-mocha-arrows */
const sinon = require('sinon');
const { expect } = require('chai');

const tasksController = require('../src/controllers');
const tasksService = require('../src/services');

describe('1 - Ao chamar o controller de listar tarefas:', () => {
  describe('Quando a requisão é bem sucedida:', () => {
    const response = {};
    const request = {};

    before(() => {
      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();

        sinon.stub(tasksService, 'list')
        .resolves({});
      });
  
      after(() => {
        tasksService.list.restore();
      });

    it('Retorna status 200.', async () => {
      await tasksController.list(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  
    it('Retorna um objeto com todas as tarefas.', async () => {
      await tasksController.list(request, response);

      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true); 
    });
  });

  describe('Quando a requisão é mal sucedida:', () => {
    const response = {};
    const request = {};
  
    before(() => {
      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();
      
      sinon.stub(tasksService, 'list')
      .resolves(null);
    });

    after(() => {
      tasksService.list.restore();
    });

    it('Retorna status 404.', async () => {
      await tasksController.list(request, response);

      expect(response.status.calledWith(404)).to.be.equal(true);
    });
  
    it('Retorna mensagem de erro "No tasks found."', async () => {
      await tasksController.list(request, response);

      expect(response.json.calledWith('No tasks found.')).to.be.equal(true);
    });
  });
});
