/* eslint-disable consistent-return */
const chalk = require('chalk');
const ServerGenerator = require('generator-jhipster/generators/server');
const writeFiles = require('./files').writeFiles;

module.exports = class extends ServerGenerator {
    constructor(args, opts) {
        super(args, Object.assign({fromBlueprint: true}, opts)); // fromBlueprint variable is important

        const jhContext = this.jhipsterContext = this.options.jhipsterContext;

        if (!jhContext) {
            this.error(`This is a JHipster blueprint and should be used only like ${chalk.yellow('jhipster --blueprint springHATEOAS')}`);
        }

        this.configOptions = jhContext.configOptions || {};
        // This sets up options for this sub generator and is being reused from JHipster
        jhContext.setupServerOptions(this, jhContext);
    }

    get initializing() {
        // Here we are not overriding this phase and hence its being handled by JHipster
        return super._initializing();
    }

    get prompting() {
        // Here we are not overriding this phase and hence its being handled by JHipster
        return super._prompting();
    }

    get configuring() {
        // Here we are not overriding this phase and hence its being handled by JHipster
        return super._configuring();
    }

    get default() {
        // Here we are not overriding this phase and hence its being handled by JHipster
        return super._default();
    }

    get writing() {
        return this._mergeWithJHipsterPhase(super._writing(), {
            write() {
                return writeFiles.call(this);
            }
        });
    }

    get end() {
        // Here we are not overriding this phase and hence its being handled by JHipster
        return super._end();
    }

    /**
     * Merge a JHipster phase with a custom phase for override and personalize generator steps.
     *
     * @param {Object} jHipsterPhase a JHipster phase called by super._AJHiPhase()
     * @param {Object} customPhase a custom phase.
     * @returns {Object} The result of the merge
     * @private
     */
    _mergeWithJHipsterPhase(jHipsterPhase, customPhase) {
        return Object.assign(jHipsterPhase, customPhase);
    }
};
